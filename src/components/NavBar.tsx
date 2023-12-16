import { Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import home_icon from "../assets/images/navbar/home_icon.png";
import chat_icon from "../assets/images/navbar/chat_icon.png";
import profile_icon from "../assets/images/navbar/profile_icon.png";
import activities_icon from "../assets/images/navbar/activities_icon.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        bg={"#343640"}
        w={"full"}
        position="fixed"
        bottom="0"
        h={"100px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          colorScheme="twitter"
          height={"70%"}
          width={"100%"}
          borderRadius={100}
          bg={"none"}
          onClick={() => navigate("/home")}
        >
          <Image src={home_icon} alt="home icon" />
        </Button>
        <Button
          colorScheme="twitter"
          height={"70%"}
          width={"100%"}
          borderRadius={100}
          bg={"none"}
          onClick={() => navigate("/home")}
        >
          <Image src={activities_icon} alt="activities icon" />
        </Button>
        <Button
          colorScheme="twitter"
          height={"70%"}
          width={"100%"}
          borderRadius={100}
          bg={"none"}
          onClick={() => navigate("/home")}
        >
          <Image src={chat_icon} alt="chat icon" />
        </Button>
        <Button
          colorScheme="twitter"
          height={"70%"}
          width={"100%"}
          borderRadius={100}
          bg={"none"}
          onClick={() => navigate("/home")}
        >
          <Image src={profile_icon} alt="profile icon" />
        </Button>
      </Flex>
    </>
  );
};

export default NavBar;
