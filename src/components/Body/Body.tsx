import React from 'react';
import {Box} from "@chakra-ui/react";

function Body() {
return (
  <Box as={"main"}>
    <section id={"top"}>
      brief home article
    </section>
    <section id={"about"}>
      about me
    </section>
    <section id={"work"}>
      projects and skills
    </section>
    <section id={"contact"}>
      contact info
    </section>
  </Box>
);
}

export default Body;