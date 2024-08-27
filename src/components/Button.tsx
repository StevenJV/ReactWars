interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ children, color = "primary", disabled, onClick }: Props) => {
  let theClassNames: string;
  disabled
    ? (theClassNames = 'btn btn-outline-primary' )
    : (theClassNames = `btn btn-${color}` );
  console.log(disabled);
  console.log(theClassNames);
  return (
    <div>
      <button
        type="button"
        className={theClassNames}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
