import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Text,
  DarkMode,
  useColorModeValue,
  Center,
  IconButton,
  Tooltip,
  Stack,
} from "@chakra-ui/react";

function Astronomy(props) {
  let boxBg = useColorModeValue("blue.100 !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");

  function favouriteHandler() {
    alert("Hacked");
  }

  return (
    <Flex
      borderRadius="20px"
      bg={boxBg}
      p="20px"
      h={{ base: "405px", md: "435px" }}
      w={{ base: "375px", md: "405px" }}
      alignItems="center"
      direction="column"
    >
      <Flex w="100%" mb="18px">
        <Text
          my="auto"
          fontWeight="600"
          color={mainText}
          textAlign="center"
          fontSize="xl"
          me="auto"
        >
          {props.title}
        </Text>

        <Tooltip label="Add To Favs">
          <IconButton
            icon={<AddIcon />}
            isRound="true"
            onClick={favouriteHandler}
            bg={iconBox}
          />
        </Tooltip>
      </Flex>
      <Stack overflow="hidden">
        <Image
          src={props.link}
          borderRadius="20px"
          mb="10px"
          alt={props.title}
          objectFit="cover"
        />
      </Stack>

      <Text
        fontWeight="600"
        color={mainText}
        textAlign="start"
        fontSize="xl"
        w="100%"
      >
        {props.date}
      </Text>
      <Flex mt="20px" w="100%" align="center">
        <DarkMode>
          <Center
            size="md"
            color="limegreen"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="x-large">{props.desc}</Text>
          </Center>
        </DarkMode>
      </Flex>
    </Flex>
  );
}

export default Astronomy;
