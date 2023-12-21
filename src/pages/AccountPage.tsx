import { Text, Stack, Avatar, Input } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import VersaButton from "../components/VersaButton";

export default function AccountPage() {
  const { logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <Stack marginY="20" marginX="5" alignItems="center" justifyContent="center">
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        Account
      </Text>

      <Avatar
        margin={0}
        size="2xl"
        src="https://i.pinimg.com/236x/36/a7/37/36a73739506a002a67b0ed091671d1fa.jpg"
      />

      <Text width="100%" fontSize="20" fontWeight="semibold" textAlign="left">
        Full Name
      </Text>
      <Input
        placeholder="Roseanne Park"
        padding="1.5rem"
        bgColor="#EDF2F7"
        mb="2em"
      />

      <Text width="100%" fontSize="20" fontWeight="semibold" textAlign="left">
        Phone Number
      </Text>
      <Input
        placeholder="123-456-7891"
        padding="1.5rem"
        bgColor="#EDF2F7"
        mb="2rem"
      />
      <VersaButton text="Setting" size="lg" />
      <Flex>
        <Button onClick={handleLogout}>Log out</Button>
      </Flex>
      <NavBar />
    </Stack>
  );
}
