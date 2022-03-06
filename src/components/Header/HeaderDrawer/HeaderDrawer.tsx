import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  DrawerFooter,
  Divider,
} from "@chakra-ui/react";

interface props {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const HeaderDrawer = ({ btnRef, isOpen, onClose, children, footer }: props) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={btnRef}
      placement={"right"}
    >
      <DrawerOverlay />
      <DrawerContent alignItems="center">
        <DrawerCloseButton alignSelf="end" mx={"15px"} my={"15px"} />
        <DrawerHeader my={"15px"}>
          <Text as="p">Navigation</Text>
        </DrawerHeader>
        <DrawerBody w={"100%"}>{children}</DrawerBody>
        <Divider />
        <DrawerFooter>{footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default HeaderDrawer;
