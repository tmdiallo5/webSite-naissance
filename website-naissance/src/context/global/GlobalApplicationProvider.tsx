import { Declarations } from "@/types/Declarations";
import { createContext, useState } from "react";

type StateProps = {
  title: string;
  requests: any[];
  declarations: Declarations[];
};

type Props = {
  state: StateProps;
  updateTitle: (data: any) => void;
  updateRequests: (data: any) => void;
  updateRequestStatus: (data: any) => void;
};

export const GlobalApplicationContext = createContext<Props>({} as Props);

function GlobalApplicationProvider({ children }: any) {
  const [state, setState] = useState<StateProps>({
    title: "Titre par defaut",
    requests: [],
    declarations: [],
  });
  const updateTitle = (data: any) => {
    //const newState = { ...state, title: data.title };

    setState((current) => ({ ...current, title: data.title }));
  };

  const updateRequests = (requests: any[]) => {
    console.log({ requests });
    // const newState = { ...state, requests };
    //console.log("Nouvel état :", newState);

    setState((current) => ({ ...current, requests }));
  };

  const updateRequestStatus = ({ id, status }: any) => {
    const { requests } = state;
    const requestsToUpdate = requests.filter(
      ({ id: requestsId }) => requestsId === id
    )[0];
    const requestsToKeep = requests.filter(
      ({ id: requestsId }) => requestsId !== id
    )[0];
    const updateRequests = [
      ...requestsToKeep,
      { ...requestsToUpdate, status: status },
    ];
    setState({ ...state, requests: updateRequests });
    console.log(id, status);
  };
  return (
    <GlobalApplicationContext.Provider
      value={{ state, updateTitle, updateRequests, updateRequestStatus }}
    >
      {children}
    </GlobalApplicationContext.Provider>
  );
}

export default GlobalApplicationProvider;
