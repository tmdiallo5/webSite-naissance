import { Declarations } from "@/types/Declarations";

import DeclarationsItem from "./DeclarationsItem";

type Props = {
  declarations: Declarations[];
};

function DeclarationsItems(props: any) {
  console.log(props);

  const { declarations } = props;

  return (
    <>
      <article className="grid grid-cols-12 items-center">
        <span className={`p-2`}>Date</span>

        <span className={`p-2 col-span-2`}>Enfant</span>

        <span className={`p-2`}>Date de nais</span>

        <span className={`p-2`}>Hopital</span>

        <span className={`p-2 col-span-2`}>Parent 1</span>
        <span className={`p-2 col-span-2`}>Parent 2</span>

        <span className={`p-2 text-center`}>Statut</span>
        <span className={`col-span-2 text-center`}>ACTIONS</span>
      </article>
      {declarations.map((item: Declarations, index: number) => (
        <DeclarationsItem declaration={item} index={index} key={item.id} />
      ))}
    </>
  );
}

export default DeclarationsItems;
