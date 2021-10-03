import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from 'recoil';
import "./index.css";
import Navigation from "./components/Navigation";

const App = () => (
  <div>
    <RecoilRoot>
      <ChakraProvider>
          <Navigation></Navigation>
      </ChakraProvider>
    </RecoilRoot>
  </div>
);

ReactDOM.render(
    <App />,
  document.getElementById("app")
);
