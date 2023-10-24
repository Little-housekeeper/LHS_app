import { Flex, Text, Image } from "@chakra-ui/react";
import RideShareGraphic from "../assets/images/hompage/RideshareGraphic.png";
import NavBar from "./NavBar";
import VersaButton from "./VersaButton";

export default function HomePage() {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingBottom={"20%"}
      gap={"3em"}
    >
      {/* Title and blurb */}
      <Flex flexDir={"column"} w={"80%"}>
        <Text
          fontFamily={"Gabarito"}
          fontWeight={800}
          fontSize={"46px"}
          color={"#42C9EB"}
          textAlign={"left"}
        >
          VERSA
        </Text>
        <Text fontFamily={"Gabarito"} fontWeight={400} fontSize={"16px"}>
          a reliable rideshare service getting you to and from LAX
        </Text>
      </Flex>

      {/* content */}
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        bgColor={"#25283D"}
        borderRadius={"50px"}
        h={"20em"}
        w={"20em"}
      >
        <Text
          color={"white"}
          fontFamily={"Gabarito"}
          fontSize={"24px"}
          fontWeight={700}
        >
          ORDER RIDE
        </Text>
        <Text
          color={"white"}
          fontFamily={"Gabarito"}
          fontSize={"16px"}
          fontWeight={600}
        >
          24 hour reservation required
        </Text>
        <Image src={RideShareGraphic} objectFit={"contain"} />
      </Flex>

      <VersaButton text="Learn more" size="lg" />

      {/* navbar */}
      <NavBar />
    </Flex>
  );
}
