import { Flex, Image, Text, Button } from "@chakra-ui/react";
import versa_map from "../assets/images/versa_map.png";
import car_icon from "../assets/images/car_icon.png";
import VersaButton from "./VersaButton";
import { ArrowForwardIcon, InfoIcon, ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "./NavBar";

const ChooseCarPage = () => {
  // Implement your component logic here
  return (
    <>
      {/* HEADING */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Flex align="center" justifyContent="space-between" w="full" p={6}>
          <Button borderRadius={"full"} width={"10px"} p={0} bg={"#25283D"}>
            <ArrowBackIcon color={"white"} />
          </Button>
          {/* Adjust the size as needed */}
          <Text fontSize="3xl" fontWeight="bold">
            Choose Ride
          </Text>

          <Button
            visibility={"hidden"}
            borderRadius={"full"}
            width={"30px"}
            bg={"#25283D"}
          ></Button>
          {/* This is a placeholder to keep space between the Icon and Text */}
        </Flex>

        {/* BODY */}
        <Flex flexDir={"column"}>
          <Image src={versa_map}></Image>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={1}
            p={2}
            my={3}
          >
            <Flex alignItems={"center"} w={"full"} gap={3} pr={5}>
              <Image src={car_icon} w={"100px"} />
              <Flex
                justifyContent={"space-between"}
                w={"60%"}
                fontWeight={"600"}
                fontSize={"xl"}
              >
                <Text>4 Seater</Text>
                <Text>$80</Text>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} w={"full"} gap={3} pr={5}>
              <Image src={car_icon} w={"100px"} />
              <Flex
                justifyContent={"space-between"}
                fontWeight={"600"}
                w={"60%"}
                fontSize={"xl"}
              >
                <Text>6 Seater</Text>
                <Text>$90</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <VersaButton text="CONFIRM RIDE" size="lg" />
      </Flex>
      <NavBar />
    </>
  );
};

export default ChooseCarPage;
