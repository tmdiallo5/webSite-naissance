import { Declarations } from "@/types/Declarations";
import React, { useReducer, useState } from "react";
import { ApplicationReducer } from "./ApplicationReducer";
import { INITIAL_STATE, UPDATE_DECLARATIONS } from "@/utils";

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
  //const [state, setState] = useState<StateData>({ declarations: [] });

  const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);
  const updateDeclarations = (declarations: Declarations[]) => {
    dispatch({ type: UPDATE_DECLARATIONS, data: declarations });
    // setState((current) => ({ ...current, declarations }));
  };

  return (
    <ApplicationContext.Provider value={{ state, updateDeclarations }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
