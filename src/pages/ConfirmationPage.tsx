import { useContext } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import ConfirmRideGraphic from "../assets/images/ConfirmRide.png";
import VersaButton from "../components/VersaButton";
import DataContext from "../context/DataContext";
import { UserAuth } from "../context/AuthContext";
import { postRequest } from "../utils/ApiUtils";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { rideData } = useContext(DataContext);
  const { user } = UserAuth();
  console.log(user);

  const handleConfirmClick = async () => {
    await postRequest(user, rideData);
    navigate("/home");
  };
  return (
    <>
      <Flex width={"100%"} align={"end"} justify={"center"} mt={"2em"}>
        <Text
          fontFamily={"Gabarito"}
          fontWeight={800}
          fontSize={"46px"}
          color={"#42C9EB"}
          width={"5em"}
        >
          Ride Confirmed
        </Text>
        <CheckCircleIcon
          boxSize={"3em"}
          color={"#42C9EB"}
          marginBottom={"1em"}
        />
      </Flex>
      <Flex justify={"center"} align={"center"} mt={"1em"}>
        <Text w="70%" fontWeight={600}>
          Your driver will arrive for pick-up at the scheduled time
        </Text>
      </Flex>
      <Flex justify={"center"} mt="2em">
        <Image src={ConfirmRideGraphic} objectFit={"contain"} />
      </Flex>
      <Flex flexDir={"column"} align={"center"} gap={"2em"} mt={"5em"}>
        <VersaButton
          text="CONFIRM"
          size="lg"
          onClickHandler={() => handleConfirmClick()}
        />
        <Text
          fontFamily={"Gabarito"}
          fontSize={"15px"}
          fontWeight={500}
          color={"#00A1CA"}
          textAlign={"right"}
        >
          VIEW SCHEDULED ACTIVITY
        </Text>
      </Flex>

      {/* DELETE LATER, ONLY FOR TEST */}
      <Flex flexDir={"column"}>
        <Text>{rideData?.schedule_date}</Text>
        <Text>{rideData?.ride_from}</Text>
        <Text>{rideData?.ride_to}</Text>
        <Text>{rideData?.driver_id}</Text>
        <Text>{rideData?.chosen_time}</Text>
      </Flex>
      <NavBar />
    </>
  );
}
