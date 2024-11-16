import { Declarations } from "@/types/Declarations";

import DeclarationsItem from "./DeclarationsItem";
import { BiSort } from "react-icons/bi";

type Props = {
  declarations: Declarations[];
  sortByStatus: () => void;
  sortByDate: () => void;
  updateStatus: (props: any) => void;
};

function DeclarationsItems(props: Props) {
  console.log(props);

  const { declarations, sortByStatus, sortByDate, updateStatus } = props;

  return (
    <>
      <article className="grid grid-cols-12 items-center">
        <button
          type="button"
          onClick={sortByDate}
          className={`p-2 text-center flex justify-between items-center`}
        >
          Date
          <BiSort />
        </button>
        <span className={`p-2 col-span-2`}>Enfant</span>

        <span className={`p-2`}>Date de nais</span>

        <span className={`p-2`}>Hopital</span>

        <span className={`p-2 col-span-2`}>Parent 1</span>
        <span className={`p-2 col-span-2`}>Parent 2</span>

        <button
          type="button"
          onClick={() => sortByStatus()}
          className={`p-2 text-center flex justify-between items-center`}
        >
          Statut
          <BiSort />
        </button>
        <span className={`col-span-2 text-center`}>ACTIONS</span>
      </article>
      {declarations.map((item: Declarations, index: number) => (
        <DeclarationsItem
          action={updateStatus}
          declaration={item}
          index={index}
          key={item.id}
        />
      ))}
    </>
  );
}

export default DeclarationsItems;
