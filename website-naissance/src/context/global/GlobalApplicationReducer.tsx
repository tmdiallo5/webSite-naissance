import { action } from "@/routes/destroy";
import { Requests } from "@/types/Requests";
import {
  APPLICATION_STATE,
  SET_REQUESTS,
  SET_REQUESTS_STATUS,
  UPDATE_TITLE,
} from "@/utils";

function GlobalApplicationReducer(state: any = APPLICATION_STATE, action: any) {
  const { type, data } = action;

  switch (type) {
    case UPDATE_TITLE:
      state = { ...state, title: data.title };
      break;

    case SET_REQUESTS:
      state = { ...state, requests: data };
      break;

    case SET_REQUESTS_STATUS:
      const { requests } = state;
      const { id, status } = data;
      const requestsToUpdate: Requests = requests.filter(
        ({ id: requestsId }: any) => requestsId === id
      )[0];
      const requestsToKeep: Requests[] = requests.filter(
        ({ id: requestsId }: any) => requestsId !== id
      );
      const updateRequests = [
        ...requestsToKeep,
        { ...requestsToUpdate, status: status },
      ];
      state = { ...state, requests: updateRequests };
      console.log(id, status);

      break;
  }

  return state;
}

export default GlobalApplicationReducer;
