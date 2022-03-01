import React from "react";
import {Flex} from "@chakra-ui/react";
import NavMenu from "./navmenu/NavMenu";

function Header() {
  return (
    <Flex as="header"
          justifyContent={{base: "center", md: "flex-end"}}
          justifySelf={"stretch"}
          flexWrap="wrap"
    >
      <NavMenu/>
    </Flex>
  );
}

export default Header;
