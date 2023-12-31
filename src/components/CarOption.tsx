import { Text, Flex, Image } from "@chakra-ui/react";
import car_icon from "../assets/images/car_icon.png";

interface Props {
  seats_num?: number;
  isChosen?: boolean;
  price?: number;
  onClick?: () => void;
}

const CarOption = ({ seats_num, price, isChosen, onClick }: Props) => {
  return (
    <>
      <Flex
        bg={isChosen ? "#d6d6d6" : "white"}
        alignItems={"center"}
        w={"full"}
        gap={3}
        px={5}
        borderRadius="70px"
        my={2}
        onClick={onClick}
      >
        <Image src={car_icon} w={"100px"} />
        <Flex
          justifyContent={"space-between"}
          w={"60%"}
          fontWeight={"600"}
          fontSize={"xl"}
        >
          <Text>{seats_num} Seater</Text>
          <Text>${price}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default CarOption;
