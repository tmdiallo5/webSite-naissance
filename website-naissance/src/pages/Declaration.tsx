import { useEffect, useState } from "react";
import { formatDate, getStatusColor, getStatusColorLabel } from "../utils";
import { Declarations } from "@/types/Declarations";
import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";

function Declaration() {
  const { declarations } = useDeclarations();

  return (
    <div className=" border-4  bg-white shadow-md rounded-md">
      <DeclarationsItems declarations={declarations} />
    </div>
  );
}

export default Declaration;
