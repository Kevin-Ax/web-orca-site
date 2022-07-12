import { createContext } from "react";
import { OrcInterface } from "../../core/OrcInterface";
import { OrcModel } from "../../models/OrcModel";

type OrcContextType = {

};

export const OrcContext = createContext({} as OrcContextType);

export function OrcProvider({ children }: { children: React.ReactNode; }) {


    return (
        <OrcContext.Provider value={{

        }} >
            {children}
        </OrcContext.Provider>
    );
}