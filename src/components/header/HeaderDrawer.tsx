import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Button,
  IconButton,
  VStack,
  Text,
  DrawerFooter,
} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";
import ColorModeToggle from "./navmenu/ColorModeToggle";

// const p = 15;
// placement = "right",
//   width,
//   isOpen,
//   children,
//   onClose,
//   btnRef,
//   title = "Menu",
//   footer,

interface props {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const HeaderDrawer = ({btnRef, isOpen, onClose, children, footer}: props) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={btnRef}
      placement={"right"}
    >
      <DrawerOverlay/>
      <DrawerContent alignItems="center">
        <DrawerCloseButton alignSelf="end" mx={"15px"} my={"15px"}/>
        <DrawerHeader my={"15px"}>
          <Text as="p">Navigation</Text>
        </DrawerHeader>
        <DrawerBody w={"100%"}>
          {children}
        </DrawerBody>
        <DrawerFooter>
          {footer}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default HeaderDrawer;