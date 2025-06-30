import React from 'react';
import styled from 'styled-components';
import BookingForm from '../components/BookingForm';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MapContainer = styled.div`
  width: 50%;
  height: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContentWrapper>
        <InfoContainer>
          <InfoText><strong>Address:</strong> 123 Beauty Lane, Suite 100, Beverly Hills, CA 90210</InfoText>
          <InfoText><strong>Phone:</strong> (310) 555-0123</InfoText>
          <InfoText><strong>Email:</strong> contact@luxelocks.com</InfoText>
          <h3>Operating Hours</h3>
          <InfoText>Tuesday - Saturday: 9am - 6pm</InfoText>
          <InfoText>Sunday - Monday: Closed</InfoText>
        </InfoContainer>
<MapContainer>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.719833330862!2d-118.4013523847892!3d34.0736229806068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6a7e0f1%3A0x1de4dd4e1f36c4e5!2sRodeo%20Dr%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1625069"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Map showing location of LuxeLocks Hair Studio in Beverly Hills"
  ></iframe>
</MapContainer>

      </ContentWrapper>
      <div style={{ marginTop: '4rem' }}>
        <Title>Send us a Message</Title>
        <BookingForm />
      </div>
    </ContactContainer>
  );
};

export default Contact;
