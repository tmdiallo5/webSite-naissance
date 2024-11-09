import { getStatusColor, getStatusColorLabel } from "@/utils";
import React from "react";

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={` p-2 ${getStatusColor(status)}`}>
      {getStatusColorLabel(status)}
    </span>
  );
}

export default StatusBadge;
