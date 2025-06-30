import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: center;
  border-top: 1px solid #f0f0f0;
`;

const FooterText = styled.p`
  color: #666;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 LuxeLocks Hair Studio. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
