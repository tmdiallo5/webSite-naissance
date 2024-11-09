type Props = {
  classes: string;
  label: string;
  action: () => null;
};

function ActionButton({ classes, label, action }: Props) {
  return (
    <button type="button" className={` p-2 ${classes}`} onClick={action}>
      {label}
    </button>
  );
}

export default ActionButton;
