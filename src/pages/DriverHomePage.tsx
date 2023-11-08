import { Flex, Text, Image } from "@chakra-ui/react";
// import rideshare_map from "../assets/images/rideshare_map.png";
import NavBar from "../components/NavBar";
// import chatButton from "../assets/images/chatButton.png";
// import driver_pic from "../assets/images/driver_pic.png";
// import location_marker from "../assets/images/location_marker.png";
// import car_icon from "../assets/images/car_icon.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

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
  // Implement your component logic here

  const upcomingActivityCards = fakeRiderData.map((rider) => (
    <Flex
      flexDir={"column"}
      bg={"#25283D"}
      color={"white"}
      borderRadius={"xl"}
      maxW={"340px"}
      p={5}
      mb={5}
    >
      <Text>{rider.name}</Text>
      <Flex justifyContent={"space-between"}>
        <Flex gap={1} fontWeight={600}>
          <Text>{rider.from} ➜</Text>
          <Text>{rider.to}</Text>
        </Flex>
        <Flex>
          <Text>{rider.timeFrom} ➜</Text>
          <Text>{rider.timeTo}</Text>
        </Flex>
      </Flex>
    </Flex>
  ));

  return (
    <Flex flexDir={"column"} gap={12}>
      <Flex w={"full"}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={events}
          eventColor="blue"
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={(e) => console.log(e)}
        />
      </Flex>
      <Flex marginLeft={8} flexDir={"column"}>
        <Text color={"#42C9EB"} as="b" fontSize={"xl"}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <Text mb={7}>Upcoming Activity</Text>
        {upcomingActivityCards}
      </Flex>
      <NavBar />
    </Flex>
  );
};

export default DriverHomePage;
