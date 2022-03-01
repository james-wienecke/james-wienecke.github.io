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
      <Button ref={btnRef} onClick={onOpen} as={IconButton} icon={<MdMenu/>}/>
      <HeaderDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} footer={<ColorModeToggle/>}>
        <VStack alignItems="left">
          <Button variant='text'>Home</Button>
          <Button variant='text'>About</Button>
          <Button variant='text'>Work</Button>
          <Button variant='text'>Contact me!</Button>
        </VStack>
      </HeaderDrawer>
    </Flex>
  );
}

export default MobileHeader;