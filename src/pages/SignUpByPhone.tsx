import {
  Flex,
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import VersaButton from "../components/VersaButton";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase";
import { UserAuth } from "../context/AuthContext";

export default function SignUpByPhone() {
  const { setUserHandler} = UserAuth();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);

  const sendOTP = async() => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+1 " + phoneNumber,
        recaptcha
      );
      console.log("confo", confirmation)
      setUser(confirmation);
      console.log("user", user);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

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
      <InputGroup>
        <InputLeftAddon children="+1" />
        <Input
          type="tel"
          placeholder="Ex: (123) 456-7892"
          bgColor="#EDF2F7"
          mb="2rem"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </InputGroup>
      <VersaButton
        text="Sign Up"
        size="lg"
        onClickHandler={() => {
          sendOTP();
        }}
        id={"sign-in-button"}
      />
      <div id="recaptcha"></div>
      <Flex>
        <Input
          placeholder="enter code"
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button onClick={verifyOtp}>Verify OTP</Button>
      </Flex>
    </Stack>
  );
}
