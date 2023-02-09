import { Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Astronomy from "./Apod";

export function AstronomyListShow(props) {
  return (
    <SimpleGrid spacing="40px" columns={{ sm: 1, md: 2, xl: 3 }}>
      {props.astronomies.astronomies.map((astronomy) => (
        <Center>
          <Astronomy
            key={astronomy.date}
            id={astronomy.date}
            title={astronomy.title}
            copyright={astronomy.copyright}
            date={astronomy.date}
            url={astronomy.url}
          />
        </Center>
      ))}
    </SimpleGrid>
  );
}

export function AstronomyListFav(props) {
  return (
    <SimpleGrid spacing="40px" columns={{ sm: 1, md: 2, xl: 3 }}>
      {props.astronomies.map((astronomy) => (
        <Center>
          <Astronomy
            key={astronomy.date}
            id={astronomy.date}
            title={astronomy.title}
            copyright={astronomy.copyright}
            date={astronomy.date}
            url={astronomy.url}
          />
        </Center>
      ))}
    </SimpleGrid>
  );
}
