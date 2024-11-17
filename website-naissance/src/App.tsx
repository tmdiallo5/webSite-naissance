import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./context/ApplicationContextProvider";

function App() {
  return (
    <ApplicationContextProvider>
      <main>
        <h1 className="text-3xl  "></h1>
        <Outlet />
      </main>
    </ApplicationContextProvider>
  );
}

export default App;
