import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Gestion des naissances</h1>
      <Outlet />
    </main>
  );
}

export default App;
