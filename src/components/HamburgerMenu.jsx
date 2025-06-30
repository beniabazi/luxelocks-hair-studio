import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  z-index: 1001;
  & > div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 2rem;
  margin: 1rem 0;
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer>
      <MenuIcon onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <NavMenu open={open}>
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </NavMenu>
    </MenuContainer>
  );
};

export default HamburgerMenu;
