import { useState, useContext, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import VersaButton from "../components/VersaButton";
import DataContext from "../context/DataContext";
import NavBar from "../components/NavBar";

const ScheduleRide = () => {
  const navigate = useNavigate();

  const { setData } = useContext(DataContext);

  const [selectedDate, setSelectedDate] = useState<any>(null); // Update the type here

  useEffect(() => {
    if (selectedDate) {
      setData((prevData: any) => ({
        ...prevData,
        scheduled_date: selectedDate.date,
      }));
    }
  }, [selectedDate, setData]);

  const handleDateClick = (e: { dayEl: HTMLElement }) => {
    // Reset the previous selected date's background color
    if (selectedDate) {
      selectedDate.dayEl.style.backgroundColor = "";
    }

    // Set the new selected date and change its background color
    setSelectedDate(e);
    e.dayEl.style.backgroundColor = "#41C9EB";
  };

  return (
    <Flex
      flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      gap={12}
    >
      <Box w={"full"} mt={10}>
        <FullCalendar
          height={"auto"}
          headerToolbar={{ start: "prev", center: "title", end: "next" }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          eventColor="blue"
          dateClick={handleDateClick}
        />
      </Box>
      <VersaButton
        text="CONFIRM"
        onClickHandler={() => navigate("/rideshare")}
      />
      <NavBar />
    </Flex>
  );
};

export default ScheduleRide;
