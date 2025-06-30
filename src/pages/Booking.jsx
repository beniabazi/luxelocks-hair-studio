import React from 'react';
import styled from 'styled-components';
import BookingForm from '../components/BookingForm';

const BookingContainer = styled.div`
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Booking = () => {
  return (
    <BookingContainer>
      <Title>Book an Appointment</Title>
      <BookingForm />
    </BookingContainer>
  );
};

export default Booking;
