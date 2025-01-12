import { Declarations } from "@/types/Declarations";
import { createContext, useReducer, useState } from "react";
import GlobalApplicationReducer from "./GlobalApplicationReducer";
import { APPLICATION_STATE, FILTER_REQUESTS } from "@/utils";

type StateProps = {
  title: string;
  token?: string;
  requestsFilter?: string;
  requests: any[];
  declarations: Declarations[];
};

type Props = {
  state: StateProps;
  updateTitle: (data: any) => void;
  setRequests: (data: any) => void;
  updateRequestStatus: (data: any) => void;
  filterRequests: (data: any) => void;
};

export const GlobalApplicationContext = createContext<Props>({} as Props);

function GlobalApplicationProvider({ children }: any) {
  /* const [state, setState] = useState<StateProps>({
    title: "Titre par defaut",
    requests: [],
    declarations: [],
  }); */
  const [state, dispatch] = useReducer(
    GlobalApplicationReducer,
    APPLICATION_STATE
  );
  const updateTitle = (data: any) => {
    dispatch({ type: "UPDATE_TITLE", data });
    //const newState = { ...state, title: data.title };

    // setState((current) => ({ ...current, title: data.title }));
  };

  const setRequests = (requests: any[]) => {
    dispatch({ type: "SET_REQUESTS", data: requests });
    console.log({ requests });
    // const newState = { ...state, requests };
    //console.log("Nouvel état :", newState);

    //setState((current) => ({ ...current, requests }));
  };

  const updateRequestStatus = (data: any) => {
    dispatch({ type: "SET_REQUESTS_STATUS", data });
  };

  const filterRequests = (data: any) => {
    dispatch({ type: FILTER_REQUESTS, data });
  };

  return (
    <GlobalApplicationContext.Provider
      value={{
        state,
        updateTitle,
        setRequests,
        updateRequestStatus,
        filterRequests,
      }}
    >
      {children}
    </GlobalApplicationContext.Provider>
  );
}

export default GlobalApplicationProvider;
