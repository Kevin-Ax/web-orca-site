import { createContext, useState } from "react";
import { OrcItemsInterface } from "../../core/OrcItemsInterface";
import { OrcModel } from "../../models/OrcModel";
import { usePush } from "../hooks/usePush";

type OrcContextType = {
    initializeOrcamento: (clientName: string, productVision: string) => void;
    addItemsToOrcamento: (newItems: OrcItemsInterface[]) => void;
    orcamento: OrcModel | null;
};

export const OrcContext = createContext({} as OrcContextType);

export function OrcProvider({ children }: { children: React.ReactNode; }) {
    const [orcamento, setOrcamento] = useState<OrcModel | null>(null);
    const { pushToIdentificationPage } = usePush();

    function initializeOrcamento(clientName: string, productVision: string) {
        setOrcamento(OrcModel.create(clientName, productVision));
    }

    function addItemsToOrcamento(newItems: OrcItemsInterface[]) {
        if (orcamento) {
            newItems.map(newIt => setOrcamento(orcamento.addItem(newIt)));
        }
        else {
            pushToIdentificationPage();
        }
    }

    return (
        <OrcContext.Provider value={{
            initializeOrcamento,
            addItemsToOrcamento,
            orcamento
        }} >
            {children}
        </OrcContext.Provider>
    );
}