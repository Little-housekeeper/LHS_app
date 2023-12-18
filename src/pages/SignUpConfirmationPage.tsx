import { Flex, Text, Button, Image } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import welcome_graphic from "../assets/images/welcome_graphic.png";

export default function SignUpConfirmationPage() {
  const navigate = useNavigate();

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={"2em"}
    >
      {/* HEADING */}
      <Flex align="center" justifyContent="space-between" w="full" p={6}>
        <Button
          borderRadius={"full"}
          width={"10px"}
          p={0}
          bg={"#25283D"}
          onClick={() => {
            navigate("/signup");
          }}
        >
          <ArrowBackIcon color={"white"} />
        </Button>
        {/* Adjust the size as needed */}
        <Text fontSize="3xl" fontWeight="bold">
          Confirmation
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
      <Flex>
        <Image src={welcome_graphic} />
      </Flex>
      <Flex w={"80%"}>
        <Text justifyContent={"center"} align={"center"} fontWeight={500}>
          Please pick via which method you'd like to receive your confirmation
          code:
        </Text>
      </Flex>

      

      <Button backgroundColor={"#25283D"} color={"white"} gap={2} borderRadius={"10px"} w={"60%"}>
        <Text>Confirm by Email</Text>
      </Button>

      <Button backgroundColor={"#25283D"} color={"white"} gap={2} borderRadius={"10px"} w={"60%"}>
        <Text>Confirm by Phone Number</Text>
      </Button>
      <NavBar />
    </Flex>
  );
}
