import { action } from "@/routes/destroy";
import {
  APPLICATION_STATE,
  SET_REQUESTS,
  SET_REQUESTS_STATUS,
  UPDATE_TITLE,
} from "@/utils";
import React from "react";

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
      const requestsToUpdate = requests.filter(
        ({ id: requestsId }: any) => requestsId === id
      )[0];
      const requestsToKeep = requests.filter(
        ({ id: requestsId }: any) => requestsId !== id
      )[0];
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
