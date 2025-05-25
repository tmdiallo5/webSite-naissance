import { Declarations } from "@/types/Declarations";
import React, { useReducer } from "react";
import { ApplicationReducer } from "./ApplicationReducer";
import { INITIAL_STATE, UPDATE_DECLARATIONS } from "@/utils";

type StateData = {
  declarations: Declarations[];
};

type Props = {
  state: StateData;
  updateDeclarations: (declaration: Declarations[]) => void;
  updateRequests?: (declaration: Declarations[]) => void;
  updateDeclarationStatus: ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => void;
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

  const updateDeclarationStatus = ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => {
    dispatch({ type: updateDeclarationStatus, data: { id, status } });
  };

  return (
    <ApplicationContext.Provider
      value={{ state, updateDeclarations, updateDeclarationStatus }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
