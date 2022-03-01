import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from '@chakra-ui/react';

interface props {
  children: React.ReactNode;
  to?: string;
}

const NavMenuItem = ({ children, to = "/"}: props) => {
  return (
    <Link as={RouterLink} to={to}>
      {children}
    </Link>
  )
}

export default NavMenuItem;
