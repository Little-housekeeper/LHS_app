import { useEffect } from "react";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import {
  Flex,
  Image,
  Text,
  Input,
  Checkbox,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { UserAuth } from "../context/AuthContext.tsx";
import TemplateImage from "../assets/images/TemplateImage.png";
import FBIcon from "../assets/images/FBIcon.png";
import GoogleIcon from "../assets/images/GoogleIcon.png";
import PhoneIcon from "../assets/images/PhoneIcon.png";
import VersaButton from "../components/VersaButton.tsx";

{
  /* <ChakraLink as={ReactRouterLink} to="/home">
  Home
</ChakraLink>; */
}

export default function LoginPage() {
  const { user, facebookSignIn, googleSignIn, phoneSignIn } = UserAuth();
  const navigate = useNavigate();

  console.log("user", user);

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  const handlePhoneSignIn = () => {
    phoneSignIn();
  };

  const handleFacebookSignIn = () => {
    facebookSignIn();
  };

  return (
    <Flex direction="column" justifyContent="center" h={"100vh"} w={"100vw"}>
      {/* title */}
      <Text
        fontFamily={"Gabarito"}
        fontWeight={800}
        fontSize={"46px"}
        color={"#42C9EB"}
        textAlign={"center"}
      >
        STELR
      </Text>

      {/* image */}
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Image src={TemplateImage} w={"20em"} h={"20em"} />
      </Flex>

      {/* login fields */}
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
        <Input
          w={"90%"}
          backgroundColor={"#EDF2F7"}
          borderRadius={"3%"}
          placeholder="Username or Email"
          fontSize={"16px"}
        />
        <Input
          w={"90%"}
          backgroundColor={"#EDF2F7"}
          borderRadius={"3%"}
          placeholder="Password"
          fontSize={"16px"}
        />
        <Flex w={"90%"} justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"center"}>
            <Checkbox fontFamily={"Gabarito"} color={"#989B9E"}>
              <Text fontSize={"15px"}>Remember Me</Text>
            </Checkbox>
          </Flex>
          <Text
            fontFamily={"Gabarito"}
            fontSize={"15px"}
            fontWeight={500}
            color={"#00A1CA"}
            textAlign={"right"}
          >
            Forgot Password?
          </Text>
        </Flex>
      </Flex>

      {/* Login Buttons */}
      <Flex
        flexDir={"column"}
        justify={"center"}
        alignItems={"center"}
        gap={"1em"}
        padding={"1em"}
      >
        <VersaButton text={"Login"} size={"lg"} />
        <Text
          fontFamily={"Gabarito"}
          fontSize={"15px"}
          fontWeight={500}
          textAlign={"right"}
        >
          Don't have an account?{" "}
          <ChakraLink as={ReactRouterLink} to={"/signup"} color={"#00A1CA"}>
            Sign up
          </ChakraLink>
        </Text>
        <Flex justifyContent={"center"} gap={"1em"} w={"90%"}>
          <Button
            bg={"none"}
            _hover={{ bg: "none" }}
            onClick={handleGoogleSignIn}
          >
            <Image src={GoogleIcon} w={"2em"} h={"2em"} />
          </Button>
          <Button
            bg={"none"}
            _hover={{ bg: "none" }}
            onClick={handlePhoneSignIn}
          >
            <Image src={PhoneIcon} w={"2em"} h={"2em"} />
          </Button>
          <Button
            bg={"none"}
            _hover={{ bg: "none" }}
            onClick={handleFacebookSignIn}
          >
            <Image src={FBIcon} w={"2em"} h={"2em"} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
