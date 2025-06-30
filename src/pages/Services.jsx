import React from 'react';
import styled from 'styled-components';

const servicesData = {
  'Haircuts & Styling': [
    { title: 'Women\'s Haircut', description: 'A customized haircut designed by your stylist to fit your individual style and preferences.', duration: '60 min', price: '$80' },
    { title: 'Men\'s Haircut', description: 'A classic haircut, tailored to your style.', duration: '45 min', price: '$50' },
    { title: 'Blowout', description: 'Professional styling and finishing service using a blow dryer and professional styling brush.', duration: '45 min', price: '$60' },
  ],
  'Coloring': [
    { title: 'All-Over Color', description: 'A single color applied from roots to ends.', duration: '2 hours', price: '$150' },
    { title: 'Partial Highlights', description: 'Highlights applied to the top half of your head.', duration: '2.5 hours', price: '$180' },
    { title: 'Full Highlights', description: 'Highlights applied to your entire head.', duration: '3 hours', price: '$250' },
    { title: 'Balayage', description: 'A technique for a sun-kissed, natural-looking hair color.', duration: '3.5 hours', price: '$300' },
  ],
  'Treatments': [
    { title: 'Deep Conditioning Treatment', description: 'A revitalizing treatment to restore moisture and shine.', duration: '30 min', price: '$50' },
    { title: 'Keratin Treatment', description: 'A smoothing treatment that eliminates frizz and adds shine.', duration: '3 hours', price: '$350' },
  ],
  'Bridal': [
    { title: 'Bridal Updo', description: 'An elegant updo for your special day.', duration: '90 min', price: '$150' },
    { title: 'Bridal Makeup', description: 'Professional makeup application for a flawless look.', duration: '60 min', price: '$120' },
  ],
};

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const CategorySection = styled.section`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
`;

const ServiceItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: var(--secondary-color);
  border-radius: 8px;
`;

const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
`;

const ServiceMeta = styled.span`
  font-size: 1rem;
  color: #666;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      {Object.entries(servicesData).map(([category, services]) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          {services.map((service) => (
            <ServiceItem key={service.title}>
              <ServiceHeader>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceMeta>{service.duration} | {service.price}</ServiceMeta>
              </ServiceHeader>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </CategorySection>
      ))}
    </ServicesContainer>
  );
};

export default Services;
