import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link } from '@chakra-ui/react';

interface props {
  children: React.ReactNode;
  to?: string;
}

const NavMenuItem = ({ children, to = "/"}: props) => {
  return (
    <Link as={RouterLink}
          to={to}
          tabIndex={-1}
          _hover={{textDecoration: 'none'}}
    >
      {children}
    </Link>
  )
}

export default NavMenuItem;
