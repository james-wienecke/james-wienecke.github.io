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
import {MdMenu} from "react-icons/md";
import NavMenuItem from "./navmenu/NavMenuItem";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <Box
      as="header"
      px={0}
      w={"100%"}>
      <DesktopHeader/>
      <MobileHeader/>
    </Box>
  );
}

export default Header;
