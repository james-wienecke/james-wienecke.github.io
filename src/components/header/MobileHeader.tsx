import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {
  Flex,
  Link,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";
import ColorModeToggle from "./navmenu/ColorModeToggle";
import HeaderDrawer from "./HeaderDrawer";

const MobileHeader = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Flex as={"nav"} display={{base: "flex", md: "none"}} justify={"flex-end"}>
      <Button ref={btnRef} onClick={onOpen} as={IconButton} icon={<MdMenu/>} aria-label="Open navigation menu"/>
      <HeaderDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} footer={<ColorModeToggle/>}>
        <VStack alignItems="left">
          <Button variant='outline' colorScheme="purple">Home</Button>
          <Button variant='outline' colorScheme="purple">About</Button>
          <Button variant='outline' colorScheme="purple">Work</Button>
          <Button variant='solid' colorScheme="purple">Contact me!</Button>
        </VStack>
      </HeaderDrawer>
    </Flex>
  );
}

export default MobileHeader;