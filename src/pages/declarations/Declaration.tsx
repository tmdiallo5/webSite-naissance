import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Debug from "@/components/shared/Debug";
import PageFilter from "@/components/shared/PageFilter";

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
  console.log({ declarations });
  console.log("====================================");

  return (
    <>
      <PageFilter
        btnLabel="Nouvelle declaration"
        btnPath={"/private/declaration/nouvelle-declaration"}
        inputPlaceHolder="Rechercher une declaration"
        action={() => null}
      />
      <div className=" border-4  bg-white shadow-md rounded-md">
        <DeclarationsItems
          declarations={
            filteredDeclaration && filteredDeclaration.length
              ? filteredDeclaration
              : declarations
          }
          updateStatus={updateStatus}
          sortByStatus={sortByStatus}
          sortByDate={sortByDate}
        />
      </div>
      <Debug data={declarations} />
    </>
  );
}

export default Declaration;
