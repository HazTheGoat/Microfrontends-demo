import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Button, ChakraProvider, Stack } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import ProductList from "productlist/list";
import Navigation from "navigation/nav";
import "./index.css";

const App = () => {
  const [showAppBorders, setShowAppBorders] = useState<boolean>(false);

  return (
    <RecoilRoot>
      <ChakraProvider>
        <Stack direction="row" justifyContent="center">
          <Stack
            width="800"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              p={2}
              m={2}
              borderWidth={showAppBorders && "4px"}
              borderColor="Blue"
              borderStyle="dashed"
            >
              <Box
                p={2}
                m={2}
                borderWidth={showAppBorders && "4px"}
                borderColor="red"
                borderStyle="dashed"
              >
                <Navigation className="navigation" />
              </Box>
              <Box
                p={2}
                m={2}
                borderWidth={showAppBorders && "4px"}
                borderColor="green"
                borderStyle="dashed"
              >
                <ProductList />
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Box mt={2}>
            <Button onClick={() => setShowAppBorders(!showAppBorders)}>
              Show app borders
            </Button>
          </Box>
        </Stack>
      </ChakraProvider>
    </RecoilRoot>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
