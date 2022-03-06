import React from "react";
import { Box } from "@chakra-ui/react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <Box
      as="header"
      px={0}
      w={"100%"}
      id={"header"}
      position={"sticky"}
      top={0}
    >
      <DesktopHeader />
      <MobileHeader />
    </Box>
  );
}

export default Header;
