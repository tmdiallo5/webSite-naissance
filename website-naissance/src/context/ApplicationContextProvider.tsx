import { Declarations } from "@/types/Declarations";
import React, { useState } from "react";

type Props = {
  state: Declarations[];
  updateDeclarations: (declaration: Declarations[]) => void;
};

//Creer le context
export const ApplicationContext = React.createContext<Props>({} as Props);
function ApplicationContextProvider({ children }: any) {
  const [state, setState] = useState([]);
  const updateDeclarations = (declarations: Declarations[]) => {
    setState((current) => ({ ...current, state: declarations }));
  };

  return (
    <ApplicationContext.Provider value={{ state, updateDeclarations }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
