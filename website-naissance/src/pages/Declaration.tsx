import { useEffect, useState } from "react";
import { formatDate, getStatusColor, getStatusColorLabel } from "../utils";
import { Declarations } from "@/types/Declarations";
import { useDeclarations } from "@/hooks";

function Declaration() {
  const { declarations } = useDeclarations();

  return (
    <div className=" border-4  bg-white shadow-md rounded-md">
      <article className="grid grid-cols-12 items-center">
        <span className={`p-2`}>Date</span>

        <span className={`p-2 col-span-2`}>Enfant</span>

        <span className={`p-2`}>Date de nais</span>

        <span className={`p-2`}>Hopital</span>

        <span className={`p-2 col-span-2`}>Parent 1</span>
        <span className={`p-2 col-span-2`}>Parent 2</span>

        <span className={`p-2`}>Statut</span>
        <span className={`col-span-2`}>ACTIONS</span>
      </article>
      {declarations.map((item: Declarations, index: number) => (
        <article
          key={item.id}
          className={`grid grid-cols-12 border-t items-center ${
            index % 2 === 0 ? "bg-gray-200" : null
          }`}
        >
          <span className={` p-2`}>{formatDate(item.registered)}</span>
          <span className={` p-2 col-span-2 flex flex-col`}>
            <span>{item.child.firstName}</span>
            <span className="uppercase">{item.child.lastName}</span>
          </span>
          <span className={` p-2`}>
            {item?.child?.birthDate ? formatDate(item.child.birthDate) : null}
          </span>
          <span className={` p-2`}>
            <span>{item.company.name}</span>
          </span>
          <span className={` p-2 col-span-2 flex flex-col`}>
            <span>{item.firstParent.firstName}</span>
            <span className="uppercase">{item.firstParent.lastName}</span>
          </span>
          <span className={` p-2 col-span-2 flex flex-col`}>
            <span>{item.secondParent.firstName}</span>
            <span className="uppercase">{item.secondParent.lastName}</span>
          </span>

          <span className={` p-2 ${getStatusColor(item.status)}`}>
            {getStatusColorLabel(item.status)}
          </span>
          <span className={` p-2 col-span-2 flex flex-col`}>ACTIONS</span>
        </article>
      ))}
    </div>
  );
}

export default Declaration;
