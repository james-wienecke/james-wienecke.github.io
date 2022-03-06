import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

interface props {
  children: React.ReactNode;
  id?: string;
  title: string;
}

const Article = ({ children, id, title }: props) => {
  return (
    <Box
      maxW={{ base: "95vw", md: "75vw" }}
      p={{ base: 2, md: 8 }}
      id={id}
      alignContent={"center"}
    >
      <Heading textAlign={{ base: "center", md: "left" }} mb={4}>
        {title}
      </Heading>
      <Flex wrap={{ base: "wrap", md: "nowrap" }}>{children}</Flex>
    </Box>
  );
};

export default Article;
