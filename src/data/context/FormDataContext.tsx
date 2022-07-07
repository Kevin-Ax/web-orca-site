import React, { createContext } from "react";


type FormDataContextType = {

};


export const FormDataContext = createContext({} as FormDataContextType);


export function FormDataProvider({ children }: { children: React.ReactNode; }) {


    return (
        <FormDataContext.Provider
            value={{

            }}
        >
            {children}
        </FormDataContext.Provider>
    );
}


