import { Outlet } from "react-router-dom";
import Nav from "@/components/nav/Nav";
import { useContext } from "react";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationProvider";

function PrivateLayout() {
  const {
    state: { title },
  } = useContext(GlobalApplicationContext);
  return (
    <section className=" min-h-screen">
      <Nav />
      <main className="wrapper pl-64 pr-10">
        <header className="flex justify-between my-3 text-2xl font-bold">
          <h3>{title}</h3>
          <span>Maviatou</span>
        </header>
        <Outlet />
      </main>
    </section>
  );
}

export default PrivateLayout;
