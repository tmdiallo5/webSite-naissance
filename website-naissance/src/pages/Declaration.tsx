import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Declaration() {
  const {
    declarations,
    state,
    updateStatus,
    sortByStatus,
    sortByDate,
    filtRef,
    filterDeclarations,
    filteredDeclaration,
  } = useDeclarations();
  console.log("====================================");
  console.log(state);
  console.log("====================================");

  return (
    <>
      <div className=" border-4  bg-white shadow-md rounded-md mb-3 flex justify-between items-center px-3 py-3">
        <input
          type="text"
          name=""
          id="rechercher"
          placeholder="Rechercher par nom et prenom"
          ref={filtRef}
          onKeyUp={filterDeclarations}
          className="bg-gray-200 px-3 py-2 rounded-md !w-96"
        />
        <Link
          to={"/private/declaration/new"}
          className="bg-green-700 rounded-md text-white px-3 py-2"
        >
          Nouvelle declaration
        </Link>
      </div>
      <div className=" border-4  bg-white shadow-md rounded-md">
        <DeclarationsItems
          declarations={
            filteredDeclaration.length
              ? filteredDeclaration
              : state?.declarations
          }
          updateStatus={updateStatus}
          sortByStatus={sortByStatus}
          sortByDate={sortByDate}
        />
      </div>
    </>
  );
}

export default Declaration;
