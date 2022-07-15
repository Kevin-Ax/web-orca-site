import { createContext, useState } from "react";
import { OrcItemsInterface } from "../../core/OrcItemsInterface";
import { OrcModel } from "../../models/OrcModel";

type OrcContextType = {
    initializeOrcamento: (clientName: string, productVision: string) => void;
    addItemsToOrcamento: (newItems: OrcItemsInterface[]) => void;
};

export const OrcContext = createContext({} as OrcContextType);

export function OrcProvider({ children }: { children: React.ReactNode; }) {
    const [orcamento, setOrcamento] = useState<OrcModel | null>(null);

    function initializeOrcamento(clientName: string, productVision: string) {
        setOrcamento(OrcModel.create(clientName, productVision));
    }

    function addItemsToOrcamento(newItems: OrcItemsInterface[]) {
        newItems.map(newItem => orcamento?.addItem(newItem));
    }

    return (
        <OrcContext.Provider value={{
            initializeOrcamento,
            addItemsToOrcamento
        }} >
            {children}
        </OrcContext.Provider>
    );
}