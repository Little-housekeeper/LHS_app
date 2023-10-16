import { Button, Image, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  icon?: React.ReactNode;
}

const VersaButton = ({ text, icon }: Props) => {
  return (
    <>
      <Button bg={"#25283D"} color={"white"} gap={2}>
        <Text>{text}</Text>
        {icon && icon}
      </Button>
    </>
  );
};

export default VersaButton;
