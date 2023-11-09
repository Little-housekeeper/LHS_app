import { Flex, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
// import rideshare_map from "../assets/images/rideshare_map.png";
import NavBar from "../components/NavBar";
// import chatButton from "../assets/images/chatButton.png";
// import driver_pic from "../assets/images/driver_pic.png";
// import location_marker from "../assets/images/location_marker.png";
// import car_icon from "../assets/images/car_icon.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import VersaButton from "../components/VersaButton";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const events = [{ title: "Meeting", start: new Date() }];

const ScheduleRide = () => {
  const navigate = useNavigate();

  // Implement your component logic here
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={12}
    >
      <Flex w={"full"} mt={"15vh"}>
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
      <VersaButton text="CONFIRM" onClickHandler={() => navigate("/rideshare")}/>
      <NavBar />
    </Flex>
  );
};

export default ScheduleRide;
