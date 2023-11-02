import { Flex, UnorderedList, ListItem, Checkbox } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import TitleText from "../components/TitleText";
import VersaButton from "../components/VersaButton";
import NavBar from "../components/NavBar";

export default function FeesPage() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
      {/* HEADING */}
      <Flex
        alignItems="center"
        justifyContent="center"
        w="full"
        p={6}
        flexDir={"column"}
      >
        <TitleText text="Additional Fees" size="3xl" />
      </Flex>

      <Flex padding={"1em"} w={"90%"}>
        <UnorderedList spacing={"2em"}>
          <ListItem>
            The price shown only covers the cost of the ride (deposit included).
          </ListItem>
          <ListItem>
            Additional fees including parking, tolls, wait time, and peak day
            reservation fees will be included onto the price at the of the trip.{" "}
          </ListItem>
          <ListItem>
            The rider is solely responsible for all associated costs of the
            ride. Payment must be made to driver by the end of the ride.{" "}
          </ListItem>
        </UnorderedList>
      </Flex>

      {/* empty div to create spacing */}
      <Flex marginBottom={"12em"}></Flex>

      <Flex flexDir={"column"} gap={"2em"}>
        <Checkbox>I Acknowledge</Checkbox>
        <VersaButton text="Next" size="lg" icon={<ArrowForwardIcon />} />
      </Flex>
      <NavBar />
    </Flex>
  );
}
