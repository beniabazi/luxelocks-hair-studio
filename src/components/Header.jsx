import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">LuxeLocks</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <HamburgerMenu />
    </HeaderContainer>
  );
};

export default Header;
