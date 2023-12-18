import { Flex, Text, Button, Input } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import VersaButton from "../components/VersaButton";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"} gap={"3em"}>
      {/* HEADING */}
      <Flex align="center" justifyContent="space-between" w="full" p={6}>
        <Button
          borderRadius={"full"}
          width={"10px"}
          p={0}
          bg={"#25283D"}
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIcon color={"white"} />
        </Button>
        {/* Adjust the size as needed */}
        <Text fontSize="3xl" fontWeight="bold">
          Sign Up
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
      <Flex flexDir={"column"} w={"100%"} justify={"center"} align={"center"} gap={"2em"}>
        <Flex flexDir={"column"} w={"83%"} align={"center"}>
          <Text
            fontFamily={"Gabarito"}
            fontSize={"20px"}
            fontWeight={600}
            w={"90%"}
          >
            Full Name
          </Text>
          <Input
            w={"90%"}
            backgroundColor={"#EDF2F7"}
            borderRadius={"3%"}
            placeholder="Ex: Jane Doe"
            fontSize={"16px"}
          />
        </Flex>
        <Flex flexDir={"column"} w={"83%"} align={"center"}>
          <Text
            fontFamily={"Gabarito"}
            fontSize={"20px"}
            fontWeight={600}
            w={"90%"}
          >
            Phone Number
          </Text>
          <Input
            w={"90%"}
            backgroundColor={"#EDF2F7"}
            borderRadius={"3%"}
            placeholder="Ex: 123-456-7890"
            fontSize={"16px"}
          />
        </Flex>
        <Flex flexDir={"column"} w={"83%"} align={"center"}>
          <Text
            fontFamily={"Gabarito"}
            fontSize={"20px"}
            fontWeight={600}
            w={"90%"}
          >
            Email
          </Text>
          <Input
            w={"90%"}
            backgroundColor={"#EDF2F7"}
            borderRadius={"3%"}
            placeholder="Ex: janedoe@gmail.com"
            fontSize={"16px"}
          />
        </Flex>
      </Flex>
      <VersaButton
        text="Sign Up"
        size="lg"
        onClickHandler={() => navigate("/signconfirmation")}
      />
      <NavBar />
    </Flex>
  );
}
