import { createContext, useEffect, useState } from "react";
import { OrcItemsInterface } from "../../core/OrcItemsInterface";
import { OrcModel } from "../../models/OrcModel";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePush } from "../hooks/usePush";

type OrcContextType = {
    initializeOrcamento: (clientName: string, productVision: string) => void;
    addItemsToOrcamento: (newItems: OrcItemsInterface[]) => void;
    orcamento: OrcModel | null;
};

export const OrcContext = createContext({} as OrcContextType);

export function OrcProvider({ children }: { children: React.ReactNode; }) {
    const [orcamento, setOrcamento] = useState<OrcModel | null>(null);

    const [nomeCliente, setNomeCliente] = useLocalStorage("nomeCliente");
    const [productVision, setProductVision] = useLocalStorage("productVision");

    const { pushToIdentificationPage } = usePush();

    // Ira buscar no localStorage se ja tem nome do cliente e visao de produto para caso a pagina 
    // seja resetada e nao ter que voltar na tela inicial

    useEffect(() => {
        if (!orcamento) {
            setOrcamento(OrcModel.create(nomeCliente, productVision));
        }
    }, [orcamento, nomeCliente, productVision]);

    function initializeOrcamento(clientName: string, productVision: string) {
        // armazenando o valor atual no localStorage para manter a persistencia de dados 
        setNomeCliente(clientName);
        setProductVision(productVision);

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