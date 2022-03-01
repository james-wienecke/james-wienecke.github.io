import React from 'react';
import {Box, Stack} from "@chakra-ui/react";
import NavMenuItem from "./NavMenuItem";
import ColorModeToggle from "./ColorModeToggle";

interface props {
  isOpen: boolean
}

const NavLinks = ({isOpen}: props) => {

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
      spacing={8}
      justify={["center", "space-around", "flex-end", "flex-end"]}
      align="center"
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
      >
        <NavMenuItem to={"/"}>Home</NavMenuItem>
        <NavMenuItem to={"/about"}>About</NavMenuItem>
        <NavMenuItem to={"/projects"}>Projects</NavMenuItem>
        <NavMenuItem to={"/contacts"} isLast={true}>Contact me!</NavMenuItem>
        <ColorModeToggle/>
      </Stack>
    </Box>
  );
}

export default NavLinks;