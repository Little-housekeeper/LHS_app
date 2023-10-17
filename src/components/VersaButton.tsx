import { Button, Text} from "@chakra-ui/react";


interface Props {
  text: string;
  icon?: React.ReactNode;
  size?: string;
}

const VersaButton = ({ text, icon, size }: Props) => {
  return (
    <>
      <Button
        bg={"#25283D"}
        color={"white"}
        gap={2}
        size={size}
        borderRadius={"45px"}
      >
        <Text>{text}</Text>
        {icon && icon}
      </Button>
    </>
  );
};

export default VersaButton;
