import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function AccountPage() {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Flex>
      <Button onClick={handleLogout}>Log out</Button>
    </Flex>
  );
}

export default AccountPage;
