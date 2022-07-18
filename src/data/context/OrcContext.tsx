import { createContext, useEffect, useState } from "react";
import { OrcItemsInterface } from "../../core/OrcItemsInterface";
import { OrcModel } from "../../models/OrcModel";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePush } from "../hooks/usePush";

type OrcContextType = {
    initializeOrcamento: (clientName: string, productVision: string) => void;
    addItemsToOrcamento: (newItems: OrcItemsInterface[]) => void;
    clearBudget: () => void;
    orcamento: OrcModel | null;
};

export const OrcContext = createContext({} as OrcContextType);

export function OrcProvider({ children }: { children: React.ReactNode; }) {
    const [orcamento, setOrcamento] = useState<OrcModel | null>(null);

    const [nomeCliente, setNomeCliente] = useLocalStorage("nomeCliente");
    const [productVision, setProductVision] = useLocalStorage("productVision");

    const { pushToItemsPage } = usePush();

    // Ira buscar no localStorage se ja tem nome do cliente e visao de produto para caso a pagina 
    // seja resetada e nao ter que voltar na tela inicial

    useEffect(() => {
        if (!orcamento) {
            setOrcamento(OrcModel.create(nomeCliente, productVision));
            pushToItemsPage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }

    function clearBudget() {
        if (orcamento) {
            const clearedBudget = orcamento.clear();
            setOrcamento(clearedBudget);

            console.log("limpou o carrinho");
        }
    }

    return (
        <OrcContext.Provider value={{
            initializeOrcamento,
            addItemsToOrcamento,
            clearBudget,
            orcamento
        }} >
            {children}
        </OrcContext.Provider>
    );
}