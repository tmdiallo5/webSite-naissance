import { getStatusLabel, STATUS } from "@/utils";
import React from "react";
import { ImInsertTemplate } from "react-icons/im";

type Props = {
  id: string;
  classes: string;
  children?: React.ReactElement;
  action: (data: { id: string; status: string }) => void;
};

function ActionButton({ id, classes, action }: Props) {
  return (
    <div className={`${classes}`}>
      <select
        onChange={(event: any) => {
          const status = event.target.value;
          action({ id: id, status });
        }}
      >
        <option value="">Sélectionner</option>
        {STATUS.map((item: string) => (
          <option key={item} value={item}>
            {getStatusLabel(item)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ActionButton;
