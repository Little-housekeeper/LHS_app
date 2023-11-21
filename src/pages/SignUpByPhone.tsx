import { Flex, Text, Button, Stack, Input } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import VersaButton from "../components/VersaButton";
export default function SignUpByPhone() {
  return (
    <Stack
      marginY="20"
      marginX="5"
      alignItems="center"
      justifyContent="center"
      spacing="3rem"
    >
      <Flex width="100%" justifyContent={"space-between"} alignItems="center">
        <Button borderRadius={"full"} width={"10px"} p={0} bg={"#25283D"}>
          <ArrowBackIcon color={"white"} fontSize={20} />
        </Button>
        <Text textAlign="center" fontSize="3xl" fontWeight="bold">
          Sign Up by Phone
        </Text>
        <Button
          borderRadius={"full"}
          width={"10px"}
          p={0}
          bg={"#25283D"}
          visibility={"hidden"}
        >
          <ArrowBackIcon color={"white"} />
        </Button>
      </Flex>
      <Avatar
        margin={0}
        size="2xl"
        src="https://i.pinimg.com/236x/36/a7/37/36a73739506a002a67b0ed091671d1fa.jpg"
      />

      <Text fontSize="18" fontWeight="semibold" textAlign="center">
        Please enter the phone number you would like to associate with this
        account
      </Text>
      <Input
        placeholder="Ex: 123-456-7892"
        padding="1.5rem"
        bgColor="#EDF2F7"
        mb="2rem"
      />
      <VersaButton text="Sign Up" size="lg" />
    </Stack>
  );
}
