import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import PrivateLayout from "../layouts/PrivateLayout";
import Declaration from "../pages/Declaration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            path: "declaration",
            element: <Declaration />,
          },
        ],
      },
    ],
  },
]);

export { router };
