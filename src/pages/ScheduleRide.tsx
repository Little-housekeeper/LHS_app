import { useState, useContext, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import VersaButton from "../components/VersaButton";
import DataContext from "../context/DataContext";
import NavBar from "../components/NavBar";

import { useDispatch, useSelector } from "react-redux";
import { incrementStep } from "../redux/slices/formProgressSlice.js";
import { RootState } from "../redux/store.js";

const ScheduleRide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { nthStep } = useSelector((state: RootState) => state.formProgress);

  const { setRideData } = useContext(DataContext);

  const [selectedDate, setSelectedDate] = useState<any>(null); // Update the type here

  useEffect(() => {
    if (nthStep < 2) {
      navigate("/home");
    }
    if (selectedDate) {
      setRideData((prevData: any) => ({
        ...prevData,
        scheduled_date: selectedDate.date.toISOString().split("T")[0],
      }));
    }
  }, [selectedDate, setRideData]);

  const handleDateClick = (e: { dayEl: HTMLElement }) => {
    // Reset the previous selected date's background color
    if (selectedDate) {
      selectedDate.dayEl.style.backgroundColor = "";
    }

    // Set the new selected date and change its background color
    setSelectedDate(e);
    e.dayEl.style.backgroundColor = "#41C9EB";
  };

  const navigateHandler = () => {
    if (selectedDate) {
      navigate("/rideshare");
      dispatch(incrementStep());
    } else {
      alert("Please select a date!");
    }
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
      <VersaButton text="CONFIRM" onClickHandler={navigateHandler} />
      <NavBar />
    </Flex>
  );
};

export default ScheduleRide;
