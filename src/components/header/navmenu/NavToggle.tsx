import React from 'react';
import {Box, CloseButton, IconButton} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";

interface props {
  toggle: () => void;
  isOpen: boolean;
}

const NavToggle = ({toggle, isOpen}: props) => {
  const showContent = ()  => {
    if (isOpen) {
      return <CloseButton/>
    } else {
      return <IconButton aria-label="open menu" icon={<MdMenu/>} size="sm"/>
    }
  }
  return (
    <Box
      onClick={toggle}
      display={{ base: "block", md: "none" }}
    >
      {showContent()}
    </Box>
  );
}

export default NavToggle;