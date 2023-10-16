import { Flex, Image, Text, Button, Input, Link, Box } from "@chakra-ui/react";
import versa_map from "../assets/images/versa_map.png";
import VersaButton from "./VersaButton";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const RideSharePage = () => {
  // Implement your component logic here
  return (
    <Box>
      <Text>Ride Share</Text>
      <Image src={versa_map}></Image>
      <Flex>
        <Text>From</Text>
        <Input></Input>
        <Text>To</Text>
        <Input></Input>
      </Flex>
      <VersaButton text="Next" icon={<ArrowForwardIcon />} />
    </Box>
  );
};

export default RideSharePage;
