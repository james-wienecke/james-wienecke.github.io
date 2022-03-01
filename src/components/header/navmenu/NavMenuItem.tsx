import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from '@chakra-ui/react';

interface props {
  children?: React.ReactNode;
  isLast?: boolean;
  to?: string;
}

const NavMenuItem = ({ children, isLast, to = "/", ...rest }: props) => {
  return (
    <Link as={RouterLink} to={to}>
      <Text display="block" fontSize="lg" fontWeight="bold" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default NavMenuItem;
