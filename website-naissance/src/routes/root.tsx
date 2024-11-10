import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/error-page";
import PrivateLayout from "@/layouts/PrivateLayout";
import Declaration from "@/pages/Declaration";
import Home from "@/pages/Home";
import DeclarationEdit from "@/pages/DeclarationEdit";

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
            path: "declaration",
            element: <Declaration />,
          },
          {
            path: "declaration/new",
            element: <DeclarationEdit />,
          },
        ],
      },
    ],
  },
]);

export { router };
