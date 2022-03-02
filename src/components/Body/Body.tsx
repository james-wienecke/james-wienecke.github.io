import React from 'react';
import {Container} from "@chakra-ui/react";
import Article from "./Article";

function Body() {
return (
  <Container as={"main"}>
    <Article id={"top"}>
      brief home article
    </Article>
    <Article id={"about"}>
      about me
    </Article>
    <Article id={"work"}>
      projects and skills
    </Article>
    <Article id={"contact"}>
      contact info
    </Article>
  </Container>
);
}

export default Body;