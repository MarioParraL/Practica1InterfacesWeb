import { FunctionComponent, JSX } from "https://esm.sh/preact@10.19.2";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <button class={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
