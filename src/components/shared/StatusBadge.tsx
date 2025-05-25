import { getStatusColor, getStatusLabel } from "@/utils";

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={` p-2 ${getStatusColor(status)}`}>
      {getStatusLabel(status)}
    </span>
  );
}

export default StatusBadge;
