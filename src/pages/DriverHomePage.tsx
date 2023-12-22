import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
// import rideshare_map from "../assets/images/rideshare_map.png";
import NavBar from "../components/NavBar";
// import chatButton from "../assets/images/chatButton.png";
// import driver_pic from "../assets/images/driver_pic.png";
// import location_marker from "../assets/images/location_marker.png";
// import car_icon from "../assets/images/car_icon.png";
import { useNavigate } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { getCustomersFromDriverPhone } from "../utils/ApiUtils";

const events = [{ title: "Meeting", start: new Date() }];
const fakeRiderData = [
  {
    name: "Jade Luu",
    from: "UTC",
    to: "LAX",
    timeFrom: "9:00AM",
    timeTo: "10:30AM",
  },
  {
    name: "Jade Luu",
    from: "UTC",
    to: "LAX",
    timeFrom: "9:00AM",
    timeTo: "10:30AM",
  },
  {
    name: "Jade Luu",
    from: "UTC",
    to: "LAX",
    timeFrom: "10:00AM",
    timeTo: "11:30AM",
  },
];

const DriverHomePage = () => {
  // DRIVER HARDCODED AS DRIVER 3 (Phone#: 555-0003)
  const [customers, setCustomers] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCustomersFromDriverPhone("555-0003").then((res: any) => {
      setCustomers(res);
    });
  }, []);
  const upcomingActivityCards = customers.map((rider: any) => (
    <Flex
      flexDir={"column"}
      bg={"#25283D"}
      color={"white"}
      borderRadius={"xl"}
      maxW={"340px"}
      p={5}
      mb={5}
      onClick={() => navigate(`/activitydetails/${rider.id}`)}
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

  return (
    <Box>
      <Box m={3}>
        <Box w={"full"} mb={10}>
          <FullCalendar
            headerToolbar={{ start: "prev", center: "title", end: "next" }}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
            eventColor="blue"
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={(e) => console.log(e)}
          />
        </Box>
        <Box marginLeft={8} flexDir={"column"}>
          <Text color={"#42C9EB"} as="b" fontSize={"xl"}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Text mb={7}>Upcoming Activity</Text>
          <Flex flexDir={"column"} maxH={"250px"} overflowY={"scroll"}>
            {upcomingActivityCards}
          </Flex>
        </Box>
      </Box>
      <NavBar />
    </Box>
  );
};

export default DriverHomePage;
