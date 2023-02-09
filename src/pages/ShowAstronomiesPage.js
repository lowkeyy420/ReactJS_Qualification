import { Center, Heading } from "@chakra-ui/react";
import Loading from "../components/action/Loading";
import { AstronomyListShow } from "../components/AstronomyList";
import { useAstronomy } from "../components/hooks/UseAstonomy";
import Layout from "../components/layout/Layout";

function ShowAstronomiesPage() {
  const datas = useAstronomy(21);

  return (
    <Layout>
      <Center p="20px" pd="30px">
        <Heading>Random Astronomies Across Time</Heading>
      </Center>

      <Loading />
      {datas && <AstronomyListShow astronomies={datas} />}
    </Layout>
  );
}

export default ShowAstronomiesPage;
