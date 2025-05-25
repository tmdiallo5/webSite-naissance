import { useContext } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "@/utils/";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";

function Nav() {
  const { logout } = useContext(GlobalApplicationContext);
  return (
    <nav className="bg-white shadow-md z-10 w-56 fixed flex flex-col justify-between top-0 bottom-0 left-0">
      <Link
        to={"/private/declaration"}
        className="bg-blue-700 text-white py-5  uppercase text-center font-extrabold"
      >
        les nouvelles vies
      </Link>
      <ul>
        {NAV_LINKS.map(({ to, label }, index) => (
          <li
            key={`navLink-${index}`}
            className={`border-b border-gray-300 ${
              index === 0 ? "border-t" : null
            }`}
          >
            <Link to={to} className="py-1 pl-2 block hover:bg-gray-100 ">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={logout}
        className="bg-red-700 py-2 font-normal text-white hover:text-red-700 hover:border hover:border-red-700 hover:bg-white"
      >
        Deconnection
      </button>
    </nav>
  );
}

export default Nav;
