import { formatDate, getStatusColor, getStatusLabel } from "@/utils";
import ActionButton from "../shared/ActionButton";
import StatusBadge from "../shared/StatusBadge";
import { Declarations } from "@/types/Declarations";
import Debug from "../shared/Debug";

type Props = {
  declaration: Declarations;
  index: number;
  action: (data: { id: string; status: string }) => void;
};

function DeclarationsItem({ declaration: item, index, action }: any) {
  const getDate = (declaration: any) => {
    const status = declaration.status.map((item: any) => {
      const { status } = item;
      status == "new";
    })[0];
    return status ? status.registered : null;
  };

  return (
    <article
      key={item.id}
      className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${
        index % 2 === 0 ? "bg-gray-100" : null
      }`}
    >
      <span className={` p-2`}>{formatDate(getDate(item.registered))}</span>
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
        action={action}
        id={`${item.id}`}
      ></ActionButton>
    </article>
  );
}

export default DeclarationsItem;
