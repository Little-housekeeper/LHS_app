import { Flex, Image, Text, Button, Input, Link } from "@chakra-ui/react";
import TemplateImage from "../assets/images/TemplateImage.png";

export default function LoginPage() {
  return (
    <Flex direction="column" justifyContent="center" h={"100vh"} w={"100vw"}>
      <Text
        fontFamily={"Gabarito"}
        fontWeight={800}
        fontSize={"46px"}
        color={"#42C9EB"}
        textAlign={"center"}
      >
        VERSA
      </Text>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Image src={TemplateImage} w={"20em"} h={"20em"} />
      </Flex>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        gap={"1em"}
      >
        <Text
          fontFamily={"Gabarito"}
          fontSize={"30px"}
          fontWeight={600}
          w={"90%"}
        >
          Login
        </Text>
        <Input w={"90%"} backgroundColor={"#EDF2F7"} borderRadius={"3%"} placeholder="Username or Email" fontSize={"16px"}/>
        <Input w={"90%"} backgroundColor={"#EDF2F7"} borderRadius={"3%"} placeholder="Password" fontSize={"16px"}/>
      </Flex>
    </Flex>
  );
}
