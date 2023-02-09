import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { contents } from "../../store/FeatureItem";
import bgPic from "../../assets/Rcw58_Selby_960.jpg";

function Feature() {
  const categoryColor = useColorModeValue("gray.600", "gray.200");
  const headerColor = useColorModeValue("gray.600", "gray.200");
  const descColor = useColorModeValue("gray.600", "gray.200");
  const statsColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage={`url(${bgPic})`}
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={categoryColor}
              >
                Exploration
              </Text>
              <Heading
                color={headerColor}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Space Revolutionary
              </Heading>
              <Text fontSize={"xl"} color={descColor}>
                Space is a vast and mysterious expanse beyond the Earth's
                atmosphere, filled with stars, planets, and other celestial
                bodies. It has been the subject of scientific exploration and
                discovery for centuries and continues to fascinate and inspire
                us as we learn more about our place in the universe. Through the
                use of satellites, telescopes, and space missions, we are
                constantly expanding our understanding of space and the wonders
                it contains.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {contents.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontWeight="md"
                    fontSize={"3xl"}
                    color={statsColor}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={textColor}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

export default Feature;
