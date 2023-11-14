import { useState, useContext, useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
// import versa_map from "../assets/images/versa_map.png";
import VersaButton from "../components/VersaButton";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";
import CarOption from "../components/CarOption";
import DataContext from "../context/DataContext";

//FAKE DATA FOR CARS
const fakeData = [
  { id: 1, carType: "4 Seater", price: 80 },
  { id: 2, carType: "6 Seater", price: 100 },
  { id: 3, carType: "6 Seater", price: 910 },
  { id: 4, carType: "6 Seater", price: 120 },
  { id: 5, carType: "6 Seater", price: 20 },
];

interface Car {
  id: number;
  carType: string;
  price: number;
}

const ChooseCarPage = () => {
  const navigate = useNavigate();

  const { data, setData } = useContext(DataContext);
  const [currentChosenCar, setCurrentChosenCar] = useState<Car | null>(null);
  console.log(data);

  useEffect(() => {
    if (currentChosenCar) {
      setData({ ...data, chosenCar: currentChosenCar });
    }
  }, [currentChosenCar]);

  const handleCarOptionClick = (car: Car) => {
    setCurrentChosenCar(car);
  };

  const carOptions = fakeData.map((car) => {
    const isChosen = currentChosenCar && currentChosenCar.id === car.id;
    return (
      <CarOption
        key={car.id}
        carType={car.carType}
        price={car.price}
        isChosen={isChosen ? true : false}
        onClick={() => handleCarOptionClick(car)}
      />
    );
  });

  return (
    <>
      {/* HEADING */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Flex align="center" justifyContent="space-between" w="full" p={6}>
          <Button borderRadius={"full"} width={"10px"} p={0} bg={"#25283D"}>
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
            {carOptions}
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
