import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    quote: "I've never felt more beautiful! The stylists at LuxeLocks are true artists.",
    author: "Jessica P."
  },
  {
    quote: "The best salon experience I've ever had. I'll definitely be back!",
    author: "Emily R."
  },
  {
    quote: "My hair has never looked better. Thank you, LuxeLocks!",
    author: "Sarah L."
  }
];

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TestimonialsContainer>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <CarouselContainer>
        <CarouselButton onClick={prevSlide}>&#8249;</CarouselButton>
        <TestimonialCard
          quote={testimonialsData[activeIndex].quote}
          author={testimonialsData[activeIndex].author}
        />
        <CarouselButton onClick={nextSlide}>&#8250;</CarouselButton>
      </CarouselContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;
