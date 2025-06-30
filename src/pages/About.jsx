import React from 'react';
import styled from 'styled-components';
import equipmentImg from '../assets/images/equipment.png';  // adjust path relative to the component file
import ownerImg from '../assets/images/owner.png';  // adjust path relative to the component file


const AboutContainer = styled.div`
  padding: 4rem 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  max-width: 400px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContent = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About LuxeLocks</Title>
      <Section>
        <Image src={equipmentImg} alt="Salon Interior" />
        <TextContent>
          <Subtitle>Our Philosophy</Subtitle>
          <Paragraph>
            At LuxeLocks, we believe that beauty is a personal journey. Our mission is to provide a luxurious and personalized experience for every client. We are dedicated to the art of hair, and our team of talented stylists is passionate about creating looks that are both beautiful and easy to maintain.
          </Paragraph>
        </TextContent>
      </Section>
      <Section>
        <TextContent>
          <Subtitle>Meet Our Founder</Subtitle>
          <Paragraph>
            Jane Doe, the founder of LuxeLocks, has been a leading figure in the beauty industry for over 15 years. Her vision was to create a salon that not only offers exceptional services but also provides a welcoming and relaxing environment for clients to unwind and feel pampered.
          </Paragraph>
        </TextContent>
        <Image src={ownerImg} alt="Founder" />
      </Section>
    </AboutContainer>
  );
};

export default About;
