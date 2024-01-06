import { useState, useContext, useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
// import versa_map from "../assets/images/versa_map.png";
import VersaButton from "../components/VersaButton";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";
import CarOption from "../components/CarOption";
import DataContext from "../context/DataContext";
import { getDriver } from "../utils/ApiUtils";

//FAKE DATA FOR CARS
// const fakeData = [
//   { id: 1, seats_num: 4, price: 80 },
//   { id: 2, seats_num: 6, price: 100 },
//   { id: 3, seats_num: 6, price: 910 },
//   { id: 4, seats_num: 4, price: 120 },
//   { id: 5, seats_num: 6, price: 20 },
// ];

const ChooseCarPage = () => {
  const navigate = useNavigate();

  const { rideData, setRideData } = useContext(DataContext);
  const [currentChosenCar, setCurrentChosenCar] = useState<number | null>(null);
  console.log(rideData);

  useEffect(() => {
    if (currentChosenCar) {
      setRideData({ ...rideData, seats_num: currentChosenCar });
    }
  }, [currentChosenCar]);

  const handleCarOptionClick = (seats_num: number) => {
    setCurrentChosenCar(seats_num);
  };

  return (
    <>
      {/* HEADING */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Flex align="center" justifyContent="space-between" w="full" p={6}>
          <Button
            borderRadius={"full"}
            width={"10px"}
            p={0}
            bg={"#25283D"}
            onClick={() => {
              navigate("/rideshare");
            }}
          >
            <ArrowBackIcon color={"white"} />
          </Button>
          {/* Adjust the size as needed */}
          <Text fontSize="3xl" fontWeight="bold">
            Choose Ride
          </Text>

          <Button
            visibility={"hidden"}
            borderRadius={"full"}
            width={"30px"}
            bg={"#25283D"}
          ></Button>
          {/* This is a placeholder to keep space between the Icon and Text */}
        </Flex>

        {/* BODY */}
        <Flex flexDir={"column"}>
          <Flex p={12}>
            <Text fontWeight="500">
              A deposit of $30 is required to reserve your ride. The deposit
              will be included in the overall cost of your trip.
            </Text>
          </Flex>

          {/* CAR OPTIONS MAP */}
          <Flex
            alignItems={"center"}
            flexDir={"column"}
            gap={1}
            p={2}
            my={3}
            h={"40vh"}
            mb={10}
            overflowY={"scroll"}
          >
            {/* {carOptions} */}
            <CarOption
              seats_num={4}
              price={80}
              isChosen={currentChosenCar === 4 ? true : false}
              onClick={() => handleCarOptionClick(4)}
            />
            <CarOption
              seats_num={6}
              price={90}
              isChosen={currentChosenCar === 6 ? true : false}
              onClick={() => handleCarOptionClick(6)}
            />
          </Flex>
        </Flex>
        <VersaButton
          text="CONFIRM"
          size="lg"
          onClickHandler={() => navigate("/fees")}
        />
      </Flex>
      <NavBar />
    </>
  );
};

export default ChooseCarPage;
