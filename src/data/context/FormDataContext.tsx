import React, { createContext, useEffect, useState } from "react";
import { ItemRepository } from "../../core/ItemRepository";
import { InMemoryItemRepository } from "../../InMemory/InMemoryItemRepository";
import { ItemModel } from "../../models/ItemModel";


type FormDataContextType = {
    getItems: () => Promise<ItemModel[]>;
    items: ItemModel[];
};


export const FormDataContext = createContext({} as FormDataContextType);


export function FormDataProvider({ children }: { children: React.ReactNode; }) {

    const repo: ItemRepository = new InMemoryItemRepository();
    const [items, setItems] = useState<ItemModel[]>([]);

    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        const res = await repo.getItems();
        setItems(res);
        return items;
    }

    return (
        <FormDataContext.Provider
            value={{
                getItems,
                items
            }}
        >
            {children}
        </FormDataContext.Provider>
    );
}


