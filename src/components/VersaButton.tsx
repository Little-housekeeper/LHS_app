import { Button, Text } from "@chakra-ui/react";

interface Props {
  id?: string;
  text?: string;
  icon?: React.ReactNode;
  size?: string;
  color?: string;
  onClickHandler?: () => void;
}

const VersaButton = ({id, text, icon, size, color = "#25283D", onClickHandler }: Props) => {
  return (
    <>
      <Button
        bg={color}
        color={"white"}
        gap={2}
        size={size}
        borderRadius={"45px"}
        onClick={onClickHandler}
      >
        {text && <Text>{text}</Text>}
        {icon && icon}
      </Button>
    </>
  );
};

export default VersaButton;
