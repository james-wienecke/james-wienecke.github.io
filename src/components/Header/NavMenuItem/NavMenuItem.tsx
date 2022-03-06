import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "@chakra-ui/react";

interface NavMenuItemProps {
  children: React.ReactNode;
  to?: string;
}

const NavMenuItem = ({ children, to = "top" }: NavMenuItemProps) => {
  return (
    <Link
      as={ScrollLink}
      tabIndex={-1}
      _hover={{ textDecoration: "none" }}
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default NavMenuItem;
