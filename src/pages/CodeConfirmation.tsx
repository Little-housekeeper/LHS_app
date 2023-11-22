import { Input, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ConfirmationCode from "../assets/images/ConfirmationCode.svg";
import VersaButton from "../components/VersaButton";
export default function CodeConfirmation(): JSX.Element {
  return (
    <Stack
      marginY="20"
      marginX="5"
      alignItems="center"
      justifyContent="center"
      spacing="4"
    >
      <Flex width="100%" justifyContent={"space-between"}>
        <Button borderRadius={"full"} width={"10px"} p={0} bg={"#25283D"}>
          <ArrowBackIcon color={"white"} fontSize={20} />
        </Button>
        <Text textAlign="center" fontSize="3xl" fontWeight="bold" mb="2rem">
          Confirmation
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

      <img src={ConfirmationCode} alt="ConfirmationImage" />

      <Text fontSize="18" fontWeight="semibold" mb="2rem" textAlign="center">
        Please enter the unique 5-digit code sent to the phone number associated
        with your account.
      </Text>

      <Flex gap="5">
        <Input
          fontSize={40}
          paddingY="2.5rem"
          fontWeight="bold"
          size="lg"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#585858"
          borderWidth="3px"
          shadow="none"
          borderRadius="0"
          _focusVisible={false}
          boxShadow="0 7px 5px -3px rgba(0, 0, 0, 0.3)"
        />
        <Input
          fontSize={40}
          paddingY="2.5rem"
          fontWeight="bold"
          size="lg"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#585858"
          borderWidth="3px"
          shadow="none"
          borderRadius="0"
          _focusVisible={false}
          boxShadow="0 7px 5px -3px rgba(0, 0, 0, 0.3)"
        />
        <Input
          fontSize={40}
          paddingY="2.5rem"
          fontWeight="bold"
          size="lg"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#585858"
          borderWidth="3px"
          shadow="none"
          borderRadius="0"
          _focusVisible={false}
          boxShadow="0 7px 5px -3px rgba(0, 0, 0, 0.3)"
        />
        <Input
          fontSize={40}
          paddingY="2.5rem"
          fontWeight="bold"
          size="lg"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#585858"
          borderWidth="3px"
          shadow="none"
          borderRadius="0"
          _focusVisible={false}
          boxShadow="0 7px 5px -3px rgba(0, 0, 0, 0.3)"
        />
        <Input
          fontSize={40}
          paddingY="2.5rem"
          fontWeight="bold"
          size="lg"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#585858"
          borderWidth="3px"
          shadow="none"
          borderRadius="0"
          _focusVisible={false}
          boxShadow="0 7px 5px -3px rgba(0, 0, 0, 0.3)"
        />
      </Flex>
      <Text m="2rem" fontWeight="semibold" fontSize="16">
        Didn't receive a code?{" "}
        <Text color="#42C9EB" display="inline-block">
          Resend
        </Text>
      </Text>
      <VersaButton text="Confirm" size="lg" />
    </Stack>
  );
}
