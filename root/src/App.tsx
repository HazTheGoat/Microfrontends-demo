import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Button, ChakraProvider, Stack } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import ProductList from "productlist/list"; // NB: Importere fra productlist appen
import Navigation from "navigation/nav"; // NB: Importere fra navigation appen
import "./index.css";
import {
  NavigationBox,
  ProductListBox,
  ShellBox,
} from "./components/custom-components";
import ShowAppBorders from "./components/show-app-border";

const App = () => {
  const [showAppBorders, setShowAppBorders] = useState<boolean>(false);

  return (
    /**
     * NB: Vi bruker Recoil state management og setter opp provider
     */
    <RecoilRoot>
      <ChakraProvider>
        <Stack direction="row" justifyContent="center">
          <ShellBox borderWidth={showAppBorders && "4px"}>
            <NavigationBox borderWidth={showAppBorders && "4px"}>
              {/**
               * NB: Navigation appen
               */}
              <Navigation className="navigation" />
            </NavigationBox>
            <ProductListBox borderWidth={showAppBorders && "4px"}>
              {/**
               * NB: ProductList appen
               */}
              <ProductList />
            </ProductListBox>
          </ShellBox>
        </Stack>
        <ShowAppBorders
          setShowAppBorders={() => setShowAppBorders(!showAppBorders)}
        />
      </ChakraProvider>
    </RecoilRoot>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
