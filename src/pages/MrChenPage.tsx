import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  getUnapprovedRequests,
  getDriver,
  matchRequestWithDriver,
} from "../utils/ApiUtils";

const MrChenPage = () => {
  const [pendingCustomers, setPendingCustomers] = useState<any>([]);
  const [step, setStep] = useState<number>(1);
  const [drivers, setDrivers] = useState<any>([]);

  const [chosenCustomer, setChosenCustomer] = useState<any>(null);
  const [chosenDriver, setChosenDriver] = useState<any>(null);

  useEffect(() => {
    getUnapprovedRequests().then((res: any) => {
      setPendingCustomers(res);
      getDriver().then((res: any) => {
        setDrivers(res);
      });
    });
  }, []);

  console.log(chosenCustomer);
  console.log(chosenDriver);

  const upcomingActivityCards = pendingCustomers.map((rider: any) => (
    <Flex
      flexDir={"column"}
      bg={"#25283D"}
      color={"white"}
      borderRadius={"xl"}
      maxW={"340px"}
      p={5}
      mb={5}
      onClick={() => {
        setStep(2);
        setChosenCustomer(rider);
      }}
    >
      <Text>{rider.name}</Text>
      <Flex justifyContent={"space-between"}>
        <Flex gap={1} fontWeight={600}>
          <Text>{rider.ride_from} ➜</Text>
          <Text>{rider.ride_to}</Text>
        </Flex>
        <Flex>
          <Text>{rider.chosen_time}</Text>
        </Flex>
      </Flex>
    </Flex>
  ));

  const driverCard = drivers.map((driver: any) => (
    <Flex
      flexDir={"column"}
      bg={"#25283D"}
      color={"white"}
      borderRadius={"xl"}
      maxW={"340px"}
      p={5}
      mb={5}
      onClick={() => {
        setChosenDriver(driver);
        setStep(3);
      }}
    >
      <Text>{driver.phone_number}</Text>
      <Flex justifyContent={"space-between"} />
    </Flex>
  ));

  console.log(pendingCustomers);
  return (
    <>
      {step === 1 && (
        <>
          <Text>Pending Customer</Text>
          <Flex
            flexDir={"column"}
            margin={"10%"}
            maxH={"70vh"}
            overflow={"scroll"}
          >
            {upcomingActivityCards}
          </Flex>
        </>
      )}
      {step === 2 && (
        <>
          <Text>Driver</Text>
          <Flex
            flexDir={"column"}
            margin={"10%"}
            maxH={"70vh"}
            overflow={"scroll"}
          >
            {driverCard}
          </Flex>
          <Button colorScheme="blue" onClick={() => setStep(1)}>
            Back
          </Button>
        </>
      )}
      {step === 3 && (
        <>
          <Text>Final </Text>
          <Flex
            flexDir={"column"}
            bg={"#25283D"}
            color={"white"}
            borderRadius={"xl"}
            maxW={"340px"}
            p={5}
            mb={5}
          >
            <Text>Customer: {chosenCustomer.name}</Text>
            <Text>Driver: {chosenDriver.phone_number}</Text>
            <Text>From: {chosenCustomer.ride_from}</Text>
            <Text>To: {chosenCustomer.ride_to}</Text>
            <Text>Time: {chosenCustomer.chosen_time}</Text>
          </Flex>
          <Button colorScheme="blue" onClick={() => setStep(2)}>
            Back
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              matchRequestWithDriver(chosenCustomer.id, chosenDriver.id);
              setStep(4);
            }}
          >
            Confirm
          </Button>
        </>
      )}
      {step === 4 && (
        <>
          <Text>Done ✅</Text>
          <Button
            onClick={() => {
              setStep(1);
            }}
            colorScheme="blue"
          >
            Back to Pending
          </Button>
        </>
      )}
    </>
  );
};

export default MrChenPage;
