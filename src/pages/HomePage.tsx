import { Flex, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import RideShareGraphic from "../assets/images/hompage/RideshareGraphic.png";
import NavBar from "../components/NavBar";
import VersaButton from "../components/VersaButton";
import { useEffect } from "react";
import { postCustomer } from "../utils/ApiUtils.js";
import { UserAuth } from "../context/AuthContext";

export default function HomePage() {
  // const { user } = UserAuth();

  const navigate = useNavigate();
  // console.log("home", user);

  // useEffect(() => {
  //   postCustomer(user);
  // }, []);

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
          STELR
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
        onClick={() => navigate("/scheduleride")}
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
