import { CircleIcon } from "@radix-ui/react-icons";
import { Button, ButtonProps } from "./button";

type Props = {
  loading: boolean;
} & ButtonProps;

const LoadingButton = ({ children, loading, ...props }: Props) => {
  return (
    <Button {...props} disabled={props.disabled || loading}>
      {loading && <CircleIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoadingButton;
