
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from "../assets/about.jpg";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    mission: false,
    goals: false,
    vision: false,
  });
 
  useEffect(() => {
    // Trigger the animation after the component mounts
    setShow(true);
  }, []);

  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Wrapper>
      <ContentWrapper show={show}>
        <ImageContainer>
          <Image src={img} alt="About Us" />
        </ImageContainer>
        <TextContainer>
          <Header> <strong>—</strong> About Us</Header>
          <Title>WHO WE ARE</Title>
          <Description>
            At Al Raiqa Dates, we are passionate about sharing the timeless tradition of Arabian hospitality 
            through the goodness of fresh dates. As the company of a pioneering date in Abu Dhabi, our journey
            began with a vision to bring the authentic flavors of the Arabian peninsula to a broader audience while
            catering to the evolving tastes of today's discerning consumers. At the heart of our enterprise is our unwavering
            commitment to quality. We take pride in offering the finest quality dates, carefully handpicked to ensure each 
            bite is a delightful experience. Our dedication to excellence extends to every aspect of our business, from
            cultivation to packaging. 
          </Description>
          <DropdownWrapper>
            <DropdownHeader onClick={() => toggleDropdown('mission')}>
              Our Mission
              <Icon>{dropdownStates.mission ? '▾' : '▸'}</Icon>
            </DropdownHeader>
            {dropdownStates.mission && (
              <DropdownContent>
                To consistently deliver premium quality dates, inspire culinary creativity, and create lasting moments of connection through thoughtful gifting.
              </DropdownContent>
            )}

            <DropdownHeader onClick={() => toggleDropdown('goals')}>
              Our Goals
              <Icon>{dropdownStates.goals ? '▾' : '▸'}</Icon>
            </DropdownHeader>
            {dropdownStates.goals && (
              <DropdownContent>
                To lead the industry with innovation and deliver excellence across all our products and services.
              </DropdownContent>
            )}

            <DropdownHeader onClick={() => toggleDropdown('vision')}>
              Our Vision
              <Icon>{dropdownStates.vision ? '▾' : '▸'}</Icon>
            </DropdownHeader>
            {dropdownStates.vision && (
              <DropdownContent>
                To be recognized as a global leader in premium dates and Arabian hospitality.
              </DropdownContent>
            )}
          </DropdownWrapper>
        </TextContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AboutUs;

// Styled Components
const Wrapper = styled.div`
  font-family: 'Lora', serif;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff7ec;
  padding: 1.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1500px;
  width: 100%;
  gap: 1.5rem;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 500px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TextContainer = styled.div`
  flex: 1.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.h3`
  color: #d8a628;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #444;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const DropdownWrapper = styled.div`
  margin-top: 1rem;
`;

const DropdownHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #d8a628;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
`;

const Icon = styled.span`
  font-size: 1.5rem;
`;

const DropdownContent = styled.div`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.6;
`;
