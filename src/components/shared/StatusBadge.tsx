import { getStatusColor, getStatusLabel } from "@/utils";
import React from "react";

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={` p-2 ${getStatusColor(status)}`}>
      {getStatusLabel(status)}
    </span>
  );
}

export default StatusBadge;
