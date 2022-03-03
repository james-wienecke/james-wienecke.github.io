import React from 'react';
import {Box, Container, Divider, Icon, Image, Link, Text} from "@chakra-ui/react";
import Article from "./Article";
import { ImGithub } from "react-icons/im";


const Body = () => {
return (
  <Box as={"main"}>
    <Article id={"top"} title={"Welcome"}>
      <Text
        mx={{base: "auto", md: "inherit"}}
        mr={{base: "inherit", md: 8}}
        mb={4}
      >
        My name is James Wienecke! I am a software developer from San Antonio, Texas.
        I do front and back end web development and design, which I am passionate about.
        I'm always learning new technology, so check out {' '}
        <Link href="https://github.com/james-wienecke" isExternal>
          my github <Icon as={ImGithub} mr={2}/>
        </Link>
        to see what I've been getting into lately.
        <br/>
        <br/>
        If there's anything I can do to help you, please feel free to reach out —
        and thank you for checking out my page!
      </Text>
      <Image
        src={"https://via.placeholder.com/150.png"}
        alt={"placeholder picture for James's headshot"}
        borderRadius={"150px"}
        boxSize={"150px"}
        mx={{base: "auto", md: "inherit"}}
        ml={{base: "auto", md: 8}}
      />
    </Article>
    <Article id={"about"} title={"About me"}>
      about me
    </Article>
    <Article id={"work"} title={"My work"}>
      projects and skills
    </Article>
    <Article id={"contact"} title={"Get in touch!"}>
      contact info
    </Article>
  </Box>
);
}

export default Body;