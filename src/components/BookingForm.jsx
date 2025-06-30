import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--accent-color);
  }
`;

const ConfirmationMessage = styled.p`
  color: green;
  text-align: center;
  margin-top: 1rem;
`;

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted');
    setSubmitted(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Phone Number" required />
        <Select required>
          <option value="">Select a Service</option>
          <option value="haircut">Haircut & Styling</option>
          <option value="coloring">Hair Coloring</option>
          <option value="treatment">Treatments</option>
          <option value="bridal">Bridal & Event Hair</option>
        </Select>
        <Input type="datetime-local" required />
        <Textarea placeholder="Notes / Preferences" />
        <Button type="submit">Submit</Button>
      </Form>
      {submitted && <ConfirmationMessage>Thank you for your booking! We will be in touch shortly.</ConfirmationMessage>}
    </>
  );
};

export default BookingForm;
