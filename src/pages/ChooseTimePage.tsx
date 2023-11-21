import { useState, useContext, useEffect } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import AvailableTimes from "../components/AvailableTimes";
import VersaButton from "../components/VersaButton";
import DataContext from "../context/DataContext";
import requestRide from "../utils/utils";

export default function ChooseTimePage() {
  const navigate = useNavigate();
  // this current date will actually be coming from the choose date page
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { data, setData } = useContext(DataContext);

  const [chosenAvailableTime, setChosenAvailableTime] = useState("");

  useEffect(() => {
    setData((prevData: any) => ({ ...prevData, time: chosenAvailableTime }));
  }, [chosenAvailableTime]);

  console.log(data);

  const allAvailableTimes = [
    { time: "9:00 AM - 10:30 AM", isChosen: false, isPeak: false },
    { time: "9:00 AM - 10:30 AM", isChosen: false, isPeak: true },
    { time: "9:00 AM - 10:30 AM", isChosen: false, isPeak: false },
    { time: "9:00 AM - 10:30 AM", isChosen: true, isPeak: false },
    { time: "9:00 AM - 10:30 AM", isChosen: false, isPeak: false },
  ].map((timeItem) => {
    // console.log(timeItem.time)
    return (
      <AvailableTimes
        time={timeItem.time}
        isChosen={timeItem.isChosen}
        isPeak={timeItem.isPeak}
        onClick={() => setChosenAvailableTime(timeItem.time)}
      />
    );
  });

  const handleConfirmRide = async () => {
    try {
      // Call the requestRide function with the necessary data
      const response = await requestRide(data);
      console.log("Ride requested successfully:", response);
    } catch (error) {
      console.error("Error requesting ride:", error);
    }
  };

  console.log(allAvailableTimes);

  return (
    <Flex flexDir={"column"}>
      {/* header */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Flex align="center" justifyContent="space-between" w="full" p={6}>
          <Button borderRadius={"full"} width={"10px"} p={0} bg={"#25283D"}>
            <ArrowBackIcon color={"white"} />
          </Button>
          {/* Adjust the size as needed */}
          <Text fontSize="3xl" fontWeight="bold">
            Choose time
          </Text>

          <Button
            visibility={"hidden"}
            borderRadius={"full"}
            width={"30px"}
            bg={"#25283D"}
          ></Button>
        </Flex>
      </Flex>

      {/* body */}
      <Flex justify={"center"} fontWeight={600}>
        {currentDate}
      </Flex>

      <Flex align={"center"} paddingLeft={"3em"} mt={"3em"} mb={"1em"}>
        {/* orange dot */}
        <Flex
          w="0.8em"
          h="0.8em"
          backgroundColor={"#FFA439"}
          borderRadius={"100%"}
        ></Flex>
        <Text fontWeight={600}>Peak Time</Text>
      </Flex>

      {/* all avaiable times */}
      <Flex
        flexDir={"column"}
        justify={"cetner"}
        align={"center"}
        gap={"1.5em"}
      >
        {allAvailableTimes}
      </Flex>
      <Flex align={"center"} justify={"center"} mt={"3em"}>
        <VersaButton
          text="CONFIRM"
          size="lg"
          onClickHandler={() => {
            handleConfirmRide();
            navigate("/confirmation");
          }}
        />
      </Flex>
      <NavBar />
    </Flex>
  );
}
