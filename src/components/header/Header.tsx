import React from "react";
import {Box} from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";

function Header() {
  return (
    <Box>
      <header>
        header
        <ColorModeToggle/>
      </header>
    </Box>
  );
}

export default Header;
