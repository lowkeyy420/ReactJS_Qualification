import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavouritesContextProvider } from "./store/Favourites-context";
import theme from "./store/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </FavouritesContextProvider>
);
