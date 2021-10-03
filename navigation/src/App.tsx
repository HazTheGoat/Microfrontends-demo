import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import Navigation from "./components/Navigation";

const App = () => (
  <div>
    <Navigation></Navigation>
  </div>
);

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("app")
);
