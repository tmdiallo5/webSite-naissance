import { formatDate, getStatusColor, getStatusColorLabel } from "@/utils";
import ActionButton from "../shared/ActionButton";
import StatusBadge from "../shared/StatusBadge";
import { Declarations } from "@/types/Declarations";

type Props = {
  declaration: Declarations;
  index: number;
};

function DeclarationsItem({ declaration: item, index }: any) {
  return (
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

      <StatusBadge status={item.status} />

      <ActionButton
        classes="p-2 col-span-2 "
        label="action"
        action={() => null}
      />
    </article>
  );
}

export default DeclarationsItem;
