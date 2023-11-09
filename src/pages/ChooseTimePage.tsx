import { Flex, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import AvailableTimes from "../components/AvailableTimes";
import VersaButton from "../components/VersaButton";

export default function ChooseTimePage() {
  const [currentChosenTime, setCurrentChosenTime] = useState(-1);

  const handleChosenTimeClick = (time: number) => {
    setCurrentChosenTime(time);
  };

  const navigate = useNavigate();

  // this current date will actually be coming from the choose date page
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const allAvailableTimes = [
    { id: 0, time: "9:00 AM - 10:30 AM", isPeak: false },
    { id: 1, time: "9:00 AM - 10:30 AM", isPeak: true },
    { id: 2, time: "9:00 AM - 10:30 AM", isPeak: false },
    { id: 3, time: "9:00 AM - 10:30 AM", isPeak: false },
    { id: 4, time: "9:00 AM - 10:30 AM", isPeak: false },
  ].map((timeItem) => {
    const isChosen = currentChosenTime === timeItem.id;
    return (
      <AvailableTimes
        id={timeItem.id}
        time={timeItem.time}
        isChosen={isChosen}
        isPeak={timeItem.isPeak}
        onClickHandler={() => handleChosenTimeClick(timeItem.id)}
      />
    );
  });

  console.log(allAvailableTimes);

  return (
    <Flex flexDir={"column"}>
      {/* header */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Flex align="center" justifyContent="space-between" w="full" p={6}>
          <Button borderRadius={"full"} width={"10px"} p={0} bg={"#25283D"} onClick={() => {navigate("/choosecar")}}>
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
          onClickHandler={() => navigate("/confirmation")}
        />
      </Flex>
      <NavBar />
    </Flex>
  );
}
