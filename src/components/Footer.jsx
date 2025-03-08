
import React from 'react';
import styled from 'styled-components';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <Logo>
            <LogoImage src="./src/assets/logo1.png" alt="Al Raiqa Logo" />
          </Logo>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </Description>
          <SocialIcons>
            <Icon><FaGoogle /></Icon>
            <Icon><FaTwitter /></Icon>
            <Icon><FaInstagram /></Icon>
            <Icon><FaLinkedin /></Icon>
          </SocialIcons>
        </LogoSection>
        <LinksSection>
          <LinksGroup>
            <LinksColumn>
              <ColumnTitle>Product</ColumnTitle>
              <Link>Dates</Link>
              <Link>Chocolates</Link>
              <Link>Stuffed dates</Link>
              <Link>Coffee</Link>
            </LinksColumn>
            <LinksColumn>
              <ColumnTitle>Company</ColumnTitle>
              <Link>About</Link>
              <Link>Contact us</Link>
              <Link>Careers</Link>
              <Link>Blog</Link>
            </LinksColumn>
          </LinksGroup>
          <LinksGroup>
            <LinksColumn>
              <ColumnTitle>Support</ColumnTitle>
              <Link>Getting started</Link>
              <Link>Help center</Link>
              <Link>Server status</Link>
              <Link>Report a bug</Link>
              <Link>Chat support</Link>
            </LinksColumn>
            <LinksColumn>
              <ColumnTitle>Contacts us</ColumnTitle>
              <ContactItem><FaEnvelope /> info@alraiqa.ae</ContactItem>
              <ContactItem><FaPhoneAlt /> +971 55 814 6706</ContactItem>
              <ContactItem><FaMapMarkerAlt /> Al Raiqa Dates Factory. LLC<br />No 19, Jurf Industrial Zone 1,<br />Ajman, UAE<br />P.O BOX: 35907</ContactItem>
            </LinksColumn>
          </LinksGroup>
        </LinksSection>
      </FooterContent>
      <FooterBottom>
        <Copyright>Copyright © 2023</Copyright>
        <FooterLinks>
          <FooterLink>Terms and Conditions</FooterLink> | <FooterLink>Privacy Policy</FooterLink>
        </FooterLinks>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  font-family: 'Lora', serif;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #d8a628;
`;

const LogoImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 0.5rem;
  padding-top: 30px;
`;

const Description = styled.p`
  margin: 1rem 0;
  color: #ccc;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 35px;
`;

const Icon = styled.div`
  background: #333;
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: #d8a628;
    color: #000;
  }
`;

const LinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinksGroup = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LinksColumn = styled.div`
  min-width: 150px;
`;

const ColumnTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Link = styled.div`
  margin-bottom: 0.5rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #d8a628;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #ccc;
`;

const FooterLinks = styled.div`
  font-size: 0.9rem;
`;

const FooterLink = styled.span`
  color: #d8a628;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;