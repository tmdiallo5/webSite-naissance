import { Navigate, Outlet } from "react-router-dom";
import Nav from "@/components/nav/Nav";
import { useContext } from "react";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationProvider";

function PrivateLayout() {
  const {
    state: { title, token },
  } = useContext(GlobalApplicationContext);
  return (
    <>
      {token ? (
        <section>
          <Nav />
          <main className="wrapper pl-64 pr-10">
            <header className="flex justify-between my-3 text-2xl font-bold">
              <h3>{title}</h3>
              <span>Maviatou</span>
            </header>
            <Outlet />
          </main>
        </section>
      ) : (
        <Navigate to={"/connexion"} />
      )}
    </>
  );
}

export default PrivateLayout;
