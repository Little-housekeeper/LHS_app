import { Text } from "@chakra-ui/layout";

interface Props {
  text?: string;
  color?: string;
  size?: string;
}

export default function TitleText({ text, color, size }: Props) {
  return (
    <>
      {/* title */}
      <Text
        fontFamily={"Gabarito"}
        fontWeight={"bold"}
        fontSize={size}
        color={color}
        textAlign={"center"}
      >
        {text}
      </Text>
    </>
  );
}
