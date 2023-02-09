import { Center, Flex, Heading } from "@chakra-ui/react";
import Astronomy from "../components/Apod";
import Feature from "../components/content/Feature";
import { useAstronomy } from "../components/hooks/UseAstonomy";
import Layout from "../components/layout/Layout";

function HomePage() {
  const data = useAstronomy();

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
              title={data.astronomies.title}
              desc={data.astronomies.copyright}
              date={data.astronomies.date}
              link={data.astronomies.url}
            />
          )}
        </Flex>
      </Center>
    </Layout>
  );
}

export default HomePage;
