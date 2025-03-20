import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./context/ApplicationContextProvider";
import GlobalApplicationProvider from "./context/global/GlobalApplicationContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function App() {
  return (
    <GlobalApplicationProvider>
      <ApplicationContextProvider>
        <QueryClientProvider client={queryClient}>
          <main>
            <h1 className="text-3xl  "></h1>
            <Outlet />
          </main>
        </QueryClientProvider>
      </ApplicationContextProvider>
    </GlobalApplicationProvider>
  );
}

export default App;
