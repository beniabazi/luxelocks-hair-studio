import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import blowdryImg from "../assets/images/blowdry.png"; // adjust path relative to the component file
import bridalImg from "../assets/images/bridal.png"; // adjust path relative to the component file
import colouringImg from "../assets/images/colouring.png"; // adjust path relative to the component file
import dryingImg from "../assets/images/drying.png"; // adjust path relative to the component file
import hairwashImg from "../assets/images/hair_wash.png"; // adjust path relative to the component file
import haircutImg from "../assets/images/haircut.png"; // adjust path relative to the component file
import hairstyleImg from "../assets/images/hairstyle.png"; // adjust path relative to the component file
import stylingImg from "../assets/images/styling.png"; // adjust path relative to the component file
import styling_2Img from "../assets/images/styling_2.png"; // adjust path relative to the component file
import washImg from "../assets/images/wash.png"; // adjust path relative to the component file

const InstagramGalleryContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
      no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const Tagline = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--accent-color);
  }
`;

const ServicesPreviewContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ServiceCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <HeroContainer>
        <Tagline>Luxe Beauty. Personal Touch.</Tagline>
        <Subtitle>Experience the art of beautiful hair.</Subtitle>
        <ButtonContainer>
          <Button onClick={() => navigate("/booking")}>Book Appointment</Button>
          <Button onClick={() => navigate("/services")}>View Services</Button>
        </ButtonContainer>
      </HeroContainer>
      <ServicesPreviewContainer>
        <SectionTitle>Our Services</SectionTitle>
        <ServiceCardsWrapper>
          <ServiceCard
            image={haircutImg}
            title="Haircuts & Styling"
            description="Precision cuts and stunning styles."
          />
          <ServiceCard
            image={colouringImg}
            title="Hair Coloring"
            description="Vibrant colors and expert application."
          />
          <ServiceCard
            image={bridalImg}
            title="Bridal & Event Hair"
            description="Elegant looks for your special day."
          />
        </ServiceCardsWrapper>
      </ServicesPreviewContainer>
      <Testimonials />
      <InstagramGalleryContainer>
        <SectionTitle>Follow Us on Instagram</SectionTitle>
        <GalleryGrid>
          <GalleryImage src={washImg} alt="Instagram post" />
          <GalleryImage src={blowdryImg} alt="Instagram post" />
          <GalleryImage src={dryingImg} alt="Instagram post" />
          <GalleryImage src={stylingImg} alt="Instagram post" />
          <GalleryImage src={styling_2Img} alt="Instagram post" />
          <GalleryImage src={haircutImg} alt="Instagram post" />
          <GalleryImage src={hairstyleImg} alt="Instagram post" />
          <GalleryImage src={dryingImg} alt="Instagram post" />
          <GalleryImage src={hairwashImg} alt="Instagram post" />
        </GalleryGrid>
      </InstagramGalleryContainer>
    </PageWrapper>
  );
};

export default Home;
