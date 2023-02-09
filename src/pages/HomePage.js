import { Center, Flex, Heading } from "@chakra-ui/react";
import Astronomy from "../components/Apod";
import Feature from "../components/content/Feature";
import { useAstronomy } from "../components/hooks/UseAstonomy";
import Layout from "../components/layout/Layout";

function HomePage() {
  const data = useAstronomy(1);

  return (
    <Layout>
      <Feature />

      <Center p="20px">
        <Flex direction="column">
          <Heading id="apod" mt="20px" mb="20px">
            Astronomy Of The Day !
          </Heading>
          {data && (
            <Astronomy
              key={data.astronomies.id}
              id={data.astronomies.id}
              title={data.astronomies.title}
              copyright={data.astronomies.copyright}
              date={data.astronomies.date}
              url={data.astronomies.url}
            />
          )}
        </Flex>
      </Center>
    </Layout>
  );
}

export default HomePage;
