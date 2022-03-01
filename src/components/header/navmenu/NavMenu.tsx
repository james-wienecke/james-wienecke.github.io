import React, {useState} from 'react';
import NavToggle from './NavToggle'
import NavLinks from "./NavLinks";
import {Flex, Heading} from "@chakra-ui/react";

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen);

  return (
    <Flex as="nav"
          align="center"
          flexWrap="wrap"
    >
      <Flex justifyContent="space-between"
            alignItems="center"
            flexBasis="100%"
      >
        <Heading>James Wienecke</Heading>
        <NavToggle toggle={toggle} isOpen={isOpen}/>
      </Flex>
      <NavLinks isOpen={isOpen}/>
    </Flex>
  );
}

export default NavMenu;