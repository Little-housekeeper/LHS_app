import { useContext, useRef } from "react";
import {
  Flex,
  Image,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import rideshare_map from "../assets/images/rideshare_map.png";
import swap_icon from "../assets/images/swap_icon.png";
import VersaButton from "../components/VersaButton";
import { ArrowForwardIcon, InfoIcon, ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";
import DataContext from "../context/DataContext";

const RideSharePage = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const toInputRef = useRef<HTMLInputElement>(null);
  const fromInputRef = useRef<HTMLInputElement>(null);
  console.log(data);

  const handleSwap = () => {
    setData({
      ...data,
      ride_from: data.ride_to,
      ride_to: data.ride_from,
    });
  };

  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
  const EMBED_DIRECTION_API_URL = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodeURIComponent(
    data.ride_from
  )}&destination=${encodeURIComponent(data.ride_to)}`;
  // Implement your component logic here
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
            onClick={() => navigate("/scheduleride")}
          >
            <ArrowBackIcon color={"white"} />
          </Button>
          {/* Adjust the size as needed */}
          <Text fontSize="3xl" fontWeight="bold">
            Ride Share
          </Text>

          <Button
            visibility={"hidden"}
            borderRadius={"full"}
            width={"30px"}
            bg={"#25283D"}
          ></Button>
          {/* This is a placeholder to keep space between the Icon and Text */}
        </Flex>

        {/* MAP */}
        <Flex flexDir={"column"}>
          {data.ride_from && data.ride_to ? (
            <iframe
              width="400"
              height="330"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={EMBED_DIRECTION_API_URL}
            ></iframe>
          ) : (
            <Image src={rideshare_map} />
          )}
          <Flex
            marginY={10}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            px={9}
          >
            <Flex flexDir={"column"} w={"90%"}>
              <Text as="b">From</Text>
              <InputGroup mb={3}>
                <InputRightElement pointerEvents="none">
                  <InfoIcon boxSize={5} color="black" />
                </InputRightElement>
                <Input
                  bg={"#C5D1DD"}
                  value={data.ride_from}
                  placeholder="42 Wallaby Way, Irvine CA"
                  ref={fromInputRef}
                  onChange={() => {
                    if (fromInputRef.current) {
                      setData({
                        ...data,
                        ride_from: fromInputRef.current.value,
                      });
                    }
                  }}
                />
              </InputGroup>
              <Text as="b">To</Text>
              <Input
                placeholder="42 Wallaby Way, Irvine CA"
                ref={toInputRef}
                onChange={() => {
                  if (toInputRef.current) {
                    setData({ ...data, ride_to: toInputRef.current.value });
                  }
                }}
                value={data.ride_to}
              />
            </Flex>
            <Button bg={"none"} p={0} onClick={handleSwap}>
              <Image w={"35px"} src={swap_icon} />
            </Button>
          </Flex>
        </Flex>
        <VersaButton
          text="Next"
          size="lg"
          icon={<ArrowForwardIcon />}
          onClickHandler={() => navigate("/choosecar")}
        />
      </Flex>
      <NavBar />
    </>
  );
};

export default RideSharePage;
