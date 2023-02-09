import { Text, useColorModeValue } from "@chakra-ui/react";

function StatsText(props) {
  const boldColor = useColorModeValue("gray.800", "white");

  return (
    <Text as={"span"} fontWeight={700} color={boldColor}>
      {props.children}
    </Text>
  );
}

export const contents = [
  {
    title: "10+",
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];
