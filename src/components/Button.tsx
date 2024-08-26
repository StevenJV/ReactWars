interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ children, color = "primary", disabled, onClick }: Props) => {
  return (
    <div>
      {disabled ? (
        <button
          type="button"
          className={"btn btn-outline-primary"}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          className={"btn btn-" + color}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </div>
  );
};
export default Button;
