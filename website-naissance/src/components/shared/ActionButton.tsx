import React, { act } from "react";

function ActionButton({ classes, label, action }: any) {
  return (
    <button type="button" className={` p-2 ${classes}`} onClick={action}>
      {label}
    </button>
  );
}

export default ActionButton;
