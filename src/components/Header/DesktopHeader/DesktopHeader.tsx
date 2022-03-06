import React from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NavMenuItem from "../NavMenuItem";
import ColorModeToggle from "../ColorModeToggle";

function DesktopHeader() {
  const bgColor = useColorModeValue("gray.100", "purple.900");
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      display={{ base: "none", md: "flex" }}
      py={4}
      pl={8}
      pr={2}
      bg={bgColor}
    >
      <Flex>
        <Heading>james wienecke</Heading>
      </Flex>

      <HStack as="nav" spacing="1">
        <NavMenuItem to="top">
          <Button variant="ghost">Home</Button>
        </NavMenuItem>
        <NavMenuItem to="about">
          <Button variant="ghost">About</Button>
        </NavMenuItem>
        <NavMenuItem to="work">
          <Button variant="ghost">Work</Button>
        </NavMenuItem>
        <NavMenuItem to="contact">
          <Button variant="solid" colorScheme="purple">
            Contact me!
          </Button>
        </NavMenuItem>
        <ColorModeToggle />
      </HStack>
    </Flex>
  );
}

export default DesktopHeader;
