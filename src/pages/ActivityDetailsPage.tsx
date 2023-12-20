import { Flex, Text, Image } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import rideshare_map from "../assets/images/rideshare_map.png";
import VersaButton from "../components/VersaButton";
import NavBar from "../components/NavBar";
import chatButton from "../assets/images/chatButton.png";
import driver_pic from "../assets/images/driver_pic.png";
import location_marker from "../assets/images/location_marker.png";
import { getRequestByid } from "../utils/ApiUtils";

const ActivityDetailsPage = () => {
  const { id: request_id } = useParams();
  const [activityData, setActivityData] = useState<any>([]);
  console.log(activityData);

  useEffect(() => {
    getRequestByid(request_id).then((res: any) => {
      setActivityData(res);
    });
  }, []);
  return (
    <>
      {/* HEADING */}
      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        {/* MAP */}
        <Flex flexDir={"column"} mt={10}>
          <Image src={rideshare_map}></Image>
        </Flex>
        <Flex flexDir={"column"} p={10} w="full" gap={7} my={10}>
          <Flex justifyContent={"space-between"} w="full">
            <Flex gap={4}>
              <Image src={driver_pic} borderRadius={"full"} />
              <Flex flexDir={"column"}>
                <Text as="b">{activityData.name}</Text>
                <Text>⭐⭐⭐</Text>
              </Flex>
            </Flex>
            <Image w={"40px"} h={"40px"} src={chatButton} />
          </Flex>

          <Flex justifyContent={"space-around"} h={"40px"} w="full">
            <Image src={location_marker} />
            <Text fontWeight={"600"}>
              Pick-Up Location:
              <br />
              {activityData.ride_from}
            </Text>
          </Flex>
        </Flex>

        <Flex gap={5}>
          <VersaButton text="Start Ride" size="lg" />
          <VersaButton text="Cancel" color="#FF0000" size="lg" />
        </Flex>
      </Flex>
      <NavBar />
    </>
  );
};

export default ActivityDetailsPage;
