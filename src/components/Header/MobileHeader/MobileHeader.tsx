import React from "react";
import {
  Flex,
  Button,
  IconButton,
  VStack,
  Heading,
  Spacer,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";
import ColorModeToggle from "../ColorModeToggle";
import HeaderDrawer from "../HeaderDrawer";
import NavMenuItem from "../NavMenuItem";

const MobileHeader = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const bgColor = useColorModeValue("gray.100", "purple.900");

  return (
    <Flex
      as={"nav"}
      display={{base: "flex", md: "none"}}
      justify={"flex-end"}
      w={"100%"}
      bg={bgColor}
    >
      {/* Heading area -- never collapsed */}
      <Flex>
        <Heading size={'md'} p={2}>james wienecke</Heading>
      </Flex>
      <Spacer/>
      {/* Drawer Open button */}
      <Button
        as={IconButton}
        ref={btnRef}
        onClick={onOpen}
        icon={<MdMenu/>}
        aria-label="Open navigation menu"
      />
      {/* Drawer */}
      <HeaderDrawer
        btnRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        footer={<ColorModeToggle/>}
      >
        {/* Drawer children */}
        <VStack alignItems="left">
          <NavMenuItem to="top">
            <Button variant="outline" w={"100%"}>Home</Button>
          </NavMenuItem>
          <NavMenuItem to="about">
            <Button variant="outline"  w={"100%"}>About</Button>
          </NavMenuItem>
          <NavMenuItem to="work">
            <Button variant="outline"  w={"100%"}>Work</Button>
          </NavMenuItem>
          <NavMenuItem to="contact">
            <Button variant="solid" colorScheme="purple"  w={"100%"}>Contact me!</Button>
          </NavMenuItem>
        </VStack>

      </HeaderDrawer>
    </Flex>
  );
}

export default MobileHeader;