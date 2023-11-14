import { useState, useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import VersaButton from "../components/VersaButton";
import DataContext from "../context/DataContext";

const ScheduleRide = () => {
  const navigate = useNavigate();

  const { setData } = useContext(DataContext);

  const [selectedDate, setSelectedDate] = useState<any>(null); // Update the type here

  useEffect(() => {
    if (selectedDate) {
      setData((prevData: any) => ({
        ...prevData,
        scheduledDate: selectedDate.date,
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
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={12}
    >
      <Flex w={"full"} mt={"15vh"}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          eventColor="blue"
          dateClick={handleDateClick}
        />
      </Flex>
      <VersaButton
        text="CONFIRM"
        onClickHandler={() => navigate("/rideshare")}
      />
      {/* Other components */}
    </Flex>
  );
};

export default ScheduleRide;
