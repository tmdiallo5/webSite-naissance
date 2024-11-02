import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

function PrivateLayout() {
  return (
    <section className="border-4 border-red-700 min-h-screen">
      <Nav />
      <main className="wrapper pl-64 pr-10">
        <header className="flex justify-between my-3 text-2xl font-bold">
          <h3>Declarations</h3>
          <span>Maviatou</span>
        </header>
        <Outlet />
      </main>
    </section>
  );
}

export default PrivateLayout;
