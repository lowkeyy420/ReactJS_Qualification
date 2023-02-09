import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
import { useContext } from "react";
import FavouritesContext from "../store/Favourites-context";

function Astronomy(props) {
  let boxBg = useColorModeValue("blue.50 !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");

  const favouriteCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouriteCtx.isItemFavorite(props.id);

  function favouriteHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavorite(props.id);
    } else {
      favouriteCtx.addFavorite({
        key: props.id,
        id: props.id,
        title: props.title,
        copyright: props.copyright,
        date: props.date,
        url: props.url,
      });
    }
  }

  return (
    <Flex
      key={props.key}
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

        <Tooltip
          label={
            itemIsFavourite ? "Remove from favourites" : "Add to favourites"
          }
        >
          <IconButton
            icon={itemIsFavourite ? <MinusIcon /> : <AddIcon />}
            isRound="true"
            onClick={favouriteHandler}
            bg={iconBox}
          />
        </Tooltip>
      </Flex>
      <Stack overflow="hidden">
        <Image
          src={props.url}
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
            color="purple.600"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="x-large">{props.copyright}</Text>
          </Center>
        </DarkMode>
      </Flex>
    </Flex>
  );
}

export default Astronomy;
