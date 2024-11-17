import { Declarations } from "@/types/Declarations";
import React, { useState } from "react";

type StateData = {
  declarations: Declarations[];
};

type Props = {
  state: StateData;
  updateDeclarations: (declaration: Declarations[]) => void;
  updateRequests?: (declaration: Declarations[]) => void;
};

//Creer le context
export const ApplicationContext = React.createContext<Props>({} as Props);
function ApplicationContextProvider({ children }: any) {
  const [state, setState] = useState<StateData>({ declarations: [] });
  const updateDeclarations = (declarations: Declarations[]) => {
    setState((current) => ({ ...current, declarations }));
  };

  return (
    <ApplicationContext.Provider value={{ state, updateDeclarations }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
