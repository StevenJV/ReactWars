import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    children && (
      <div className="alert alert-success">
        let's go to <strong>{children}</strong>
      </div>
    )
  );
};
export default Alert;
