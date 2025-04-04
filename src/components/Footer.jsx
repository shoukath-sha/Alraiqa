
// import React from 'react';
// import styled from 'styled-components';
// import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <FooterWrapper>
//       <FooterContent>
//         <LogoSection>
//           <Logo>
//             <LogoImage src="./src/assets/logo1.png" alt="Al Raiqa Logo" />
//           </Logo>
//           <Description>
//             Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
//           </Description>
//           <SocialIcons>
//             <Icon><FaGoogle /></Icon>
//             <Icon><FaTwitter /></Icon>
//             <Icon><FaInstagram /></Icon>
//             <Icon><FaLinkedin /></Icon>
//           </SocialIcons>
//         </LogoSection>
//         <LinksSection>
//           <LinksGroup>
//             <LinksColumn>
//               <ColumnTitle>Product</ColumnTitle>
//               <Link>Dates</Link>
//               <Link>Chocolates</Link>
//               <Link>Stuffed dates</Link>
//               <Link>Coffee</Link>
//             </LinksColumn>
//             <LinksColumn>
//               <ColumnTitle>Company</ColumnTitle>
//               <Link>About</Link>
//               <Link>Contact us</Link>
//               <Link>Careers</Link>
//               <Link>Blog</Link>
//             </LinksColumn>
//           </LinksGroup>
//           <LinksGroup>
//             {/* <LinksColumn>
//               <ColumnTitle>Support</ColumnTitle>
//               <Link>Getting started</Link>
//               <Link>Help center</Link>
//               <Link>Server status</Link>
//               <Link>Report a bug</Link>
//               <Link>Chat support</Link>
//             </LinksColumn> */}
//             <LinksColumn>
//               <ColumnTitle>Contacts us</ColumnTitle>
//               <ContactItem><FaEnvelope /> info@alraiqa.ae</ContactItem>
//               <ContactItem><FaPhoneAlt /> +971 55 814 6706</ContactItem>
//               <ContactItem><FaMapMarkerAlt /> Al Raiqa Dates Factory. LLC<br />No 19, Jurf Industrial Zone 1,<br />Ajman, UAE<br />P.O BOX: 35907</ContactItem>
//             </LinksColumn>
//           </LinksGroup>
//         </LinksSection>
//       </FooterContent>
//       <FooterBottom>
//         <Copyright>Copyright © 2023</Copyright>
//         <FooterLinks>
//           <FooterLink>Terms and Conditions</FooterLink> | <FooterLink>Privacy Policy</FooterLink>
//         </FooterLinks>
//       </FooterBottom>
//     </FooterWrapper>
//   );
// };

// export default Footer;

// // Styled Components
// const FooterWrapper = styled.footer`
//   background-color: #000;
//   color: #fff;
//   padding: 2rem;
//   font-family: 'Lora', serif;
// `;

// const FooterContent = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const LogoSection = styled.div`
//   flex: 1;
//   min-width: 250px;
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #d8a628;
// `;

// const LogoImage = styled.img`
//   width: 150px;
//   height: auto;
//   margin-bottom: 0.5rem;
//   padding-top: 30px;
// `;

// const Description = styled.p`
//   margin: 1rem 0;
//   color: #ccc;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   height: 35px;
// `;

// const Icon = styled.div`
//   background: #333;
//   border-radius: 50%;
//   padding: 0.5rem;
//   font-size: 1.2rem;
//   cursor: pointer;

//   &:hover {
//     background: #d8a628;
//     color: #000;
//   }
// `;

// const LinksSection = styled.div`
//   flex: 2;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const LinksGroup = styled.div`
//   display: flex;
//   gap: 2rem;
//   flex: 1;

//   @media (max-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const LinksColumn = styled.div`
//   min-width: 150px;
// `;

// const ColumnTitle = styled.h4`
//   font-size: 1.2rem;
//   margin-bottom: 1rem;
//   color: #fff;
// `;

// const Link = styled.div`
//   margin-bottom: 0.5rem;
//   color: #ccc;
//   cursor: pointer;

//   &:hover {
//     color: #d8a628;
//   }
// `;

// const ContactItem = styled.div`
//   margin-bottom: 1rem;
//   color: #ccc;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   svg {
//     font-size: 1.2rem;
//   }
// `;

// const FooterBottom = styled.div`
//   margin-top: 2rem;
//   border-top: 1px solid #333;
//   padding-top: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const Copyright = styled.div`
//   font-size: 0.9rem;
//   color: #ccc;
// `;

// const FooterLinks = styled.div`
//   font-size: 0.9rem;
// `;

// const FooterLink = styled.span`
//   color: #d8a628;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

import React from 'react';
import { Phone, Mail, ArrowUp, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full ">
      {/* Main footer with gradient background */}
      <div className=" bg-[#fefbee] pt-16 pb-32 px-8">
        <div className="container mx-auto">
          {/* Top section with contact info */}
          <div className="flex flex-col lg:flex-row justify-between mb-16 text-black">
            <div className="max-w-md mb-8 lg:mb-0">
              <p className="text-sm">
                If you would like to know more about our products, or would like to connect with Al Foah as a retailer, feel free to get in touch with us.
              </p>
              <div className="flex items-center mt-6">
                <Phone size={16} className="mr-2" />
                <span>+971370718808</span>
              </div>
              <div className="flex items-center mt-3">
                <Mail size={16} className="mr-2" />
                <span>customerservice@alfoah.ae</span>
              </div>
            </div>
            
            {/* Logo */}
            <div className="flex justify-center items-center mb-8 lg:mb-0">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                  <path fill="currentColor" d="M50,10 C60,30 80,40 90,50 C80,60 60,70 50,90 C40,70 20,60 10,50 C20,40 40,30 50,10 Z M50,20 C55,35 65,45 70,50 C65,55 55,65 50,80 C45,65 35,55 30,50 C35,45 45,35 50,20 Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Navigation links */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-black">
              <div>
                <ul className="space-y-2">
                  <li>DATES</li>
                  <li>PRODUCTS</li>
                  <li>BRANDS</li>
                  <li>SUPPLIERS</li>
                  <li>FARMERS PORTAL</li>
                  <li>ABOUT</li>
                  <li>FARMERS</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>EZAD</li>
                  <li>MEDIA</li>
                  <li>CONTACT</li>
                  <li>NEWS AND EVENTS</li>
                  <li>CAREERS</li>
                  <li>PRIVACY POLICY</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curve transition between amber and white sections */}
      <div className="relative h-16  bg-[#fefbee] overflow-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M 0 120 L 0 60 C 300 120, 900 120, 1200 60 L 1200 120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      
      {/* Bottom white section with copyright */}
      <div className="bg-white py-8 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-700 text-xs">
            <div>
              <p className="mb-2">TERMS & CONDITIONS</p>
              <p>COPYRIGHT © 2025 ALL RIGHTS RESERVED BY AL RAIQA</p>
            </div>
            
            <div className="my-6 md:my-0">
              <img src="/api/placeholder/100/40" alt="Aghia logo" className="h-10" />
            </div>
            
            <div>
              <p className="mb-3">FOLLOW US ON</p>
              <div className="flex space-x-4">
                <Facebook size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
    </footer>
  );
}