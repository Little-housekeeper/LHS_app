import { Button, Text } from "@chakra-ui/react";

interface Props {
  text?: string;
  icon?: React.ReactNode;
  size?: string;
  color?: string;
}

const VersaButton = ({ text, icon, size, color = "#25283D" }: Props) => {
  return (
    <>
      <Button
        bg={color}
        color={"white"}
        gap={2}
        size={size}
        borderRadius={"45px"}
      >
        {text && <Text>{text}</Text>}
        {icon && icon}
      </Button>
    </>
  );
};

export default VersaButton;
