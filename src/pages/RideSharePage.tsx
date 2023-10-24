import {
  Flex,
  Image,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import versa_map from "../assets/images/versa_map.png";
import swap_icon from "../assets/images/swap_icon.png";
import VersaButton from "../components/VersaButton";
import { ArrowForwardIcon, InfoIcon, ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";

const RideSharePage = () => {
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
            Ride Share
          </Text>

          <Button
            visibility={"hidden"}
            borderRadius={"full"}
            width={"30px"}
            bg={"#25283D"}
          ></Button>
          {/* This is a placeholder to keep space between the Icon and Text */}
        </Flex>

        {/* MAP */}
        <Flex flexDir={"column"}>
          <Image src={versa_map}></Image>
          <Flex
            marginY={10}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Flex flexDir={"column"} w={"90%"}>
              <Text as="b">From</Text>
              <InputGroup mb={3}>
                <InputRightElement pointerEvents="none">
                  <InfoIcon boxSize={5} color="black" />
                </InputRightElement>
                <Input
                  bg={"#C5D1DD"}
                  defaultValue={"LAX International Airport"}
                  isReadOnly={true}
                />
              </InputGroup>
              <Text as="b">To</Text>
              <Input placeholder="42 Wallaby Way, Irvine CA" />
            </Flex>
            <Button bg={"none"} p={0}>
              <Image w={"35px"} src={swap_icon} />
            </Button>
          </Flex>
        </Flex>
        <VersaButton text="Next" size="lg" icon={<ArrowForwardIcon />} />
      </Flex>
      <NavBar />
    </>
  );
};

export default RideSharePage;
