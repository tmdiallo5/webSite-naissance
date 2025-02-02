import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./context/ApplicationContextProvider";
import GlobalApplicationProvider from "./context/global/GlobalApplicationContextProvider";

function App() {
  return (
    <GlobalApplicationProvider>
      <ApplicationContextProvider>
        <main>
          <h1 className="text-3xl  "></h1>
          <Outlet />
        </main>
      </ApplicationContextProvider>
    </GlobalApplicationProvider>
  );
}

export default App;
