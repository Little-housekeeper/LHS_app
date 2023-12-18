import { Flex, Text, Image } from "@chakra-ui/react";
import rideshare_map from "../assets/images/rideshare_map.png";
import NavBar from "../components/NavBar";
import chatButton from "../assets/images/chatButton.png";
import driver_pic from "../assets/images/driver_pic.png";
import location_marker from "../assets/images/location_marker.png";
import car_icon from "../assets/images/car_icon.png";

const AwaitingDriverPage = () => {
  // Implement your component logic here
  return (
    <>
      {/* HEADING */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        {/* MAP */}
        <Flex flexDir={"column"} mt={10}>
          <Image src={rideshare_map}></Image>
        </Flex>
        <Flex
          flexDir={"column"}
          p={10}
          w="full"
          gap={7}
          my={10}
          alignItems={"center"}
        >
          <Flex justifyContent={"space-between"} w="full">
            <Flex gap={4}>
              <Image src={driver_pic} borderRadius={"full"} />
              <Flex flexDir={"column"}>
                <Text as="b">Jade Luu</Text>
                <Text>⭐⭐⭐</Text>
              </Flex>
            </Flex>
            <Image w={"40px"} h={"40px"} src={chatButton} />
          </Flex>

          <Flex w="full">
            <Flex gap={4}>
              <Image
                w={"60px"}
                h={"60px"}
                src={car_icon}
                borderRadius={"full"}
              />
              <Flex flexDir={"column"}>
                <Text as="b">4 Seater</Text>
                <Text>7L4XB12</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex w="full" justifyContent={"space-around"} gap={5}>
            <Image w={"40px"} h={"40px"} src={location_marker} />
            <Text fontWeight={"600"} fontSize={"sm"}>
              Your driver is on the way. Please head to your pick-up destination
              at University Town Center, Irvine CA
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <NavBar />
    </>
  );
};

export default AwaitingDriverPage;
