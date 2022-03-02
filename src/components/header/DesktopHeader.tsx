import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Heading,
  HStack,
  Text, useColorModeValue
} from "@chakra-ui/react";
import NavMenuItem from "./navmenu/NavMenuItem";
import ColorModeToggle from "./navmenu/ColorModeToggle";

function DesktopHeader() {
  const bgColor = useColorModeValue("gray.100", "purple.900");
  return (
    <Flex align={"center"}
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
        <NavMenuItem to="https://www.google.com">
          <Button variant="ghost">Home</Button>
        </NavMenuItem>
        <NavMenuItem>
          <Button variant="ghost">About</Button>
        </NavMenuItem>
        <NavMenuItem>
          <Button variant="ghost">Work</Button>
        </NavMenuItem>
        <NavMenuItem>
          <Button variant="solid" colorScheme="purple">Contact me!</Button>
        </NavMenuItem>
        <NavMenuItem>
          <ColorModeToggle/>
        </NavMenuItem>
      </HStack>
    </Flex>
  );
}

export default DesktopHeader;
