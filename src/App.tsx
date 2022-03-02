import React from "react";
import { VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
  return (
    <VStack>
      <Header/>
      <Body/>
      <Footer/>
    </VStack>
  );
}

export default App;
