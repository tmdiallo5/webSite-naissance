import { useEffect, useState } from "react";
import {
  DECLARATIONS,
  formatDate,
  getStatusColor,
  getStatusColorLabel,
} from "../utils";

function Declaration() {
  const [declarations, setDeclaration] = useState<any>([]);

  const search = async () => {
    const response = await fetch("http://localhost:8080/declarations");
    const data = await response.json();
    setDeclaration(data);
  };

  useEffect(() => {
    search();
  }, []);

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
      {declarations.map((item: any, index: number) => (
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
          <span className={` p-2`}>{formatDate(item.child.birthDate)}</span>
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
