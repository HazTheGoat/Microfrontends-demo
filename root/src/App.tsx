import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

// const Navigation = React.lazy(() => import("nav/Navigation"));
import ProductList from "list/list";
import Navigation from "nav/nav";

import "./index.css";

const App = () => (
  <RecoilRoot>
    <ChakraProvider>
      <Navigation />
      <ProductList />
    </ChakraProvider>
  </RecoilRoot>
);

ReactDOM.render(<App />, document.getElementById("app"));
