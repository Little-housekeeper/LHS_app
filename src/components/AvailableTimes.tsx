import { Flex, Text } from "@chakra-ui/react";

interface Props {
  id?: number;
  time?: string;
  isChosen?: boolean;
  isPeak?: boolean;
  onClick?: () => void;
}

export default function AvailableTimes({
  time,
  isChosen,
  isPeak,
  onClick,
}: Props) {
  return (
    <>
      <Flex
        onClick={onClick}
        borderRadius={"15px"}
        border={"0.5px solid"}
        w={"80%"}
        justifyContent={"center"}
        p={"0.6em"}
        borderColor={isPeak ? "#FFA439" : "#1A1A1A"}
        borderWidth={isPeak ? "3px" : "0.5px"}
        backgroundColor={isChosen ? "#41C9EB" : "#FFFFFF"}
      >
        <Text fontWeight={600}>{time}</Text>
      </Flex>
    </>
  );
}
