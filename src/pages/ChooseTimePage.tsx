import { useState, useContext, useEffect } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import AvailableTimes from "../components/AvailableTimes";
import VersaButton from "../components/VersaButton";
import DataContext from "../context/DataContext";

import { useDispatch, useSelector } from "react-redux";
import { incrementStep } from "../redux/slices/formProgressSlice.js";
import { RootState } from "../redux/store.js";

export default function ChooseTimePage() {
  // const [currentChosenTime, setCurrentChosenTime] = useState(-1);

  // const handleChosenTimeClick = (time: number) => {
  //   setCurrentChosenTime(time);
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { nthStep } = useSelector((state: RootState) => state.formProgress);

  // this current date will actually be coming from the choose date page
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { rideData, setRideData } = useContext(DataContext);

  const [chosenAvailableTime, setChosenAvailableTime] = useState("");

  useEffect(() => {
    if (nthStep < 6) {
      navigate("/fees");
    }
    setRideData((prevData: any) => ({
      ...prevData,
      chosen_time: chosenAvailableTime,
    }));
  }, [chosenAvailableTime, nthStep]);

  console.log(rideData);

  const allAvailableTimes = [
    { id: 0, time: "9:00 AM - 10:30 AM", isPeak: false },
    { id: 1, time: "10:30 AM - 12:00 PM", isPeak: true },
    { id: 2, time: "1:00 PM - 2:30 PM", isPeak: false },
    { id: 3, time: "3:00 PM - 4:30 PM", isPeak: false },
    { id: 4, time: "5:00 PM - 6:30 PM", isPeak: false },
  ].map((timeItem) => {
    const isChosen = chosenAvailableTime === timeItem.time;
    return (
      <AvailableTimes
        id={timeItem.id}
        time={timeItem.time}
        isChosen={isChosen}
        isPeak={timeItem.isPeak}
        onClick={() => setChosenAvailableTime(timeItem.time)}
      />
    );
  });

  console.log(allAvailableTimes);

  const navigateHandler = () => {
    if (chosenAvailableTime) {
      navigate("/confirmation");
      dispatch(incrementStep());
    } else {
      alert("Please select a time");
    }
  };
  return (
    <Flex flexDir={"column"}>
      {/* header */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Flex align="center" justifyContent="space-between" w="full" p={6}>
          <Button
            borderRadius={"full"}
            width={"10px"}
            p={0}
            bg={"#25283D"}
            onClick={() => {
              navigate("/choosecar");
            }}
          >
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
          onClickHandler={navigateHandler}
        />
      </Flex>
      <NavBar />
    </Flex>
  );
}
