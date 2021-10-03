import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import "./index.css";
import ProductList from "./components/ProductList";

const App = () => (
  <RecoilRoot>
    <ChakraProvider>
      <ProductList></ProductList>
    </ChakraProvider>
  </RecoilRoot>
);

ReactDOM.render(<App />, document.getElementById("app"));
