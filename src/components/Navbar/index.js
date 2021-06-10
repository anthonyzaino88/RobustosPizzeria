import React from 'react';
import { Nav, NavLink, Bars, NavIcon } from './NavbarElements'

const Navbar =({toggle}) => {
  return (
  <>
  <Nav>
  <NavLink to='/'>Robusto Pizzeria</NavLink>
  <NavIcon onClick={toggle}>
    <Bars />
  </NavIcon>
  </Nav>
  </>
  );
};

export default Navbar;
