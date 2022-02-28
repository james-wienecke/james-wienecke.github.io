import React from 'react';
import {Flex, FormControl, Switch, useColorMode} from "@chakra-ui/react";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <FormControl>
      <Switch id="toggle-color-mode" onChange={toggleColorMode} size="sm">Night mode</Switch>
    </FormControl>
  );
}

export default ColorModeToggle;