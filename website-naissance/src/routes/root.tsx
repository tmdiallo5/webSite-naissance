import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/error-page";
import PrivateLayout from "@/layouts/PrivateLayout";
import Declaration from "@/pages/Declaration";
import Home from "@/pages/Home";
import DeclarationEdit from "@/pages/DeclarationEdit";

import { action as destroyAction } from "./destroy";
import Requests from "@/pages/requests/Requests";
import RequestEdit from "@/pages/requests/RequestEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={"/private/declaration"} />,
          },
          {
            path: "declaration",
            element: <Declaration />,
          },
          {
            path: "declaration/nouvelle-declaration",
            element: <DeclarationEdit />,
          },
          {
            path: "demandes",
            element: <Requests />,
          },
          {
            path: "demandes/nouvelle-demande",
            element: <RequestEdit />,
          },
        ],
      },
    ],
  },
]);

export { router };
