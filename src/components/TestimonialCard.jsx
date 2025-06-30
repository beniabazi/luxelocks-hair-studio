import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const TestimonialCard = ({ quote, author }) => {
  return (
    <CardContainer>
      <Quote>"{quote}"</Quote>
      <Author>- {author}</Author>
    </CardContainer>
  );
};

export default TestimonialCard;
