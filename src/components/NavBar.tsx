import { Button, Flex, Image } from "@chakra-ui/react";
import home_icon from "../assets/images/navbar/home_icon.png";
import chat_icon from "../assets/images/navbar/chat_icon.png";
import profile_icon from "../assets/images/navbar/profile_icon.png";
import activities_icon from "../assets/images/navbar/activities_icon.png";

const NavBar = () => {
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
        <Button bg={"none"}>
          <Image src={home_icon} alt="home icon" />
        </Button>
        <Button bg={"none"}>
          <Image src={activities_icon} alt="activities icon" />
        </Button>
        <Button bg={"none"}>
          <Image src={chat_icon} alt="chat icon" />
        </Button>
        <Button bg={"none"}>
          <Image src={profile_icon} alt="profile icon" />
        </Button>
      </Flex>
    </>
  );
};

export default NavBar;
