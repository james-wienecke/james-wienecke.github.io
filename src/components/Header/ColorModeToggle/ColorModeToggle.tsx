import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const getIcon = () => {
    return colorMode === "dark" ? <MdDarkMode /> : <MdOutlineWbSunny />;
  };
  return (
    <IconButton
      aria-label="toggle color theme"
      icon={getIcon()}
      onClick={toggleColorMode}
      size="sm"
      isRound={true}
      variant="outline"
      colorScheme="purple"
    />
  );
}

export default ColorModeToggle;
