import React from "react";
import { VStack } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";


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
