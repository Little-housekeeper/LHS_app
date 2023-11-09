import { Flex, Text } from "@chakra-ui/react";

interface Props {
  id?: number;
  time?: string;
  isChosen?: boolean;
  isPeak?: boolean;
  onClickHandler?: () => void;
}

export default function AvailableTimes({ id, time, isChosen, isPeak, onClickHandler }: Props) {
  return (
    <>
      <Flex
        key={id}
        borderRadius={"15px"}
        border={"0.5px solid"}
        w={"80%"}
        justifyContent={"center"}
        p={"0.6em"}
        borderColor={isPeak ? "#FFA439" : "#1A1A1A"}
        borderWidth={isPeak ? "3px" : "0.5px"}
        backgroundColor={isChosen ? "#41C9EB" : "#FFFFFF"}
        onClick={onClickHandler}
      >
        <Text fontWeight={600}>{time}</Text>
      </Flex>
    </>
  );
}
