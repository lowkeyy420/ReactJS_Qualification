import {
  Center,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Astronomy from "../components/Apod";
import { AstronomyListFav } from "../components/AstronomyList";
import Layout from "../components/layout/Layout";
import FavouritesContext from "../store/Favourites-context";

function FavoritesPage() {
  const favouriteCtx = useContext(FavouritesContext);

  const [keyword, setKeyword] = useState("");

  let content = null;

  if (favouriteCtx.totalFavourites > 0) {
    content = <GridView data={favouriteCtx.favourites} keyword={keyword} />;
    // content = <AstronomyListFav astronomies={favouriteCtx.favourites} />;
  }

  return (
    <Layout>
      {favouriteCtx.totalFavourites === 0 && (
        <Center>
          <Heading>No Favourites Yet...</Heading>
        </Center>
      )}
      <Center mt="20px" mb="20px">
        <Flex direction="column">
          <Text textAlign="center" p="20px">
            Search By Copyright
          </Text>

          <Input
            variant="filled"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Flex>
      </Center>
      {content}
    </Layout>
  );
}

function GridView(props) {
  console.log(props.data);
  return (
    <SimpleGrid>
      {props.data.map((ast) => {
        if (
          ast.copyright.toLowerCase().indexOf(props.keyword) != -1 &&
          props.keyword !== ""
        ) {
          return (
            <Astronomy
              key={ast.id}
              id={ast.id}
              title={ast.title}
              copyright={ast.copyright}
              date={ast.date}
              url={ast.url}
            />
          );
        }
      })}
    </SimpleGrid>
  );
}

export default FavoritesPage;
