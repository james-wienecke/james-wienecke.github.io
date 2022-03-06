import React from "react";
import {
  Box,
  Container,
  Divider,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Article from "./Article";
import GithubCard from "./GithubCard";
import { ImGithub } from "react-icons/im";
import { RiExternalLinkLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Body = () => {
  return (
    <Box as={"main"}>
      <Article id={"top"} title={"Welcome"}>
        <Text
          mx={{ base: "auto", md: "inherit" }}
          mr={{ base: "inherit", md: 8 }}
          mb={4}
        >
          My name is James Wienecke! I am a software developer from San Antonio,
          Texas. I do front and back end web development and design, which I am
          passionate about. I'm always learning new technology, so check out{" "}
          <Link href="https://github.com/james-wienecke" isExternal>
            my github <Icon as={ImGithub} mr={2} />
          </Link>
          to see what I've been getting into lately.
          <br />
          <br />
          If there's anything I can do to help you, please feel free to reach
          out — and thank you for checking out my page!
        </Text>
        <Image
          src={"https://via.placeholder.com/150.png"}
          alt={"placeholder picture for James's headshot"}
          borderRadius={"150px"}
          boxSize={"150px"}
          mx={{ base: "auto", md: "inherit" }}
          ml={{ base: "auto", md: 8 }}
        />
      </Article>
      <Article id={"about"} title={"About me"}>
        <Text
          mx={{ base: "auto", md: "inherit" }}
          mr={{ base: "inherit", md: 8 }}
          mb={4}
        >
          I have loved writing code for almost my entire life. When I was a kid,
          I used to make webpages from scratch and later started making my own
          games. The webpages and games were absolutely terrible, but I found
          the process of building software to be incredibly fulfilling and
          engaging.
          <br />
          I've dabbled in a dozen or so languages since then, from C++ to
          JavaScript to
          <Link href="https://ksp-kos.github.io/KOS/" isExternal>
            an obscure scripting language for the video game "Kerbal Space
            Program",
            <Icon as={RiExternalLinkLine} mr={2} />
          </Link>
          but I've since committed to learning modern web development
          technologies. I've immersed myself in this ever-growing niche and I'm
          constantly expanding my knowlege and skills as the industry grows and
          innovates.
        </Text>
      </Article>
      <Article id={"githubCard"} title={"Latest activity"}>
        <GithubCard />
      </Article>
      <Article id={"work"} title={"My work"}>
        projects and skills
      </Article>
      <Article id={"contact"} title={"Get in touch!"}>
        <List spacing={3}>
          <ListItem>
            <Link href="https://www.linkedin.com/in/james-a-wienecke/">
              <ListIcon as={IoLogoLinkedin} />
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/james-wienecke">
              <ListIcon as={ImGithub} />
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:james.a.wienecke@gmail.com">
              <ListIcon as={MdEmail} />
              E-mail
            </Link>
          </ListItem>
        </List>
      </Article>
    </Box>
  );
};

export default Body;
