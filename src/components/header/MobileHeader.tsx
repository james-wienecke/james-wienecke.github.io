import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Button,
  IconButton, useDisclosure, VStack, Text,
} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";
import ColorModeToggle from "./navmenu/ColorModeToggle";


const MobileHeader = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Flex as={"nav"} display={{base: "flex", md: "none"}} justify={"flex-end"}>
      <Button ref={btnRef} onClick={onOpen} as={IconButton} icon={<MdMenu/>}/>
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
            <Text as="p">James Wienecke</Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems="left">
              <Button variant='text'>Home</Button>
              <Button variant='text'>About</Button>
              <Button variant='text'>Work</Button>
              <Button variant='text'>Contact me!</Button>
              <ColorModeToggle/>
            </VStack>
          </DrawerBody>
          {/*<DrawerFooter></DrawerFooter>*/}
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default MobileHeader;