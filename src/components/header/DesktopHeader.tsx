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
  Text
} from "@chakra-ui/react";
import NavMenuItem from "./navmenu/NavMenuItem";
import ColorModeToggle from "./navmenu/ColorModeToggle";

function DesktopHeader() {
  return (
    <Flex align={"center"}
          justify={"space-between"}
          display={{ base: "none", md: "flex" }}
    >
      <Flex>
        <Heading>james wienecke</Heading>
      </Flex>

      <HStack as="nav" spacing="5">
        <NavMenuItem>
          <Text>Home</Text>
        </NavMenuItem>
        <NavMenuItem>
          <Text>About</Text>
        </NavMenuItem>
        <NavMenuItem>
          <Text>Work</Text>
        </NavMenuItem>
        <NavMenuItem>
          <Button>Contact me!</Button>
        </NavMenuItem>
        <NavMenuItem>
          <ColorModeToggle/>
        </NavMenuItem>
      </HStack>
    </Flex>
  );
}

export default DesktopHeader;
