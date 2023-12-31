import React from "react";
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {
FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink
} from "./FooterElement";

const Footer = () => {
return (
<FooterContainer>

<FooterLinksContainer>
<FooterLinksWrapper>
<FooterLinkItems>
<FooterLinkTitle>About us</FooterLinkTitle>
<FooterLink to="/signin">How it works</FooterLink>
<FooterLink to="/signin">Testimonials</FooterLink>
<FooterLink to="/signin">Careers</FooterLink>
<FooterLink to="/signin">Investors</FooterLink>
<FooterLink to="/signin">Terms of services</FooterLink>
</FooterLinkItems>
<FooterLinkItems>
<FooterLinkTitle>Contact Us</FooterLinkTitle>
<FooterLink to="/signin">Contact</FooterLink>
<FooterLink to="/signin">Support</FooterLink>
<FooterLink to="/signin">Destinations</FooterLink>
<FooterLink to="/signin">Sponsorships</FooterLink>
</FooterLinkItems>
</FooterLinksWrapper>

<FooterLinksWrapper>
<FooterLinkItems>
<FooterLinkTitle>Videos</FooterLinkTitle>
<FooterLink to="/signin">Submit Video</FooterLink>
<FooterLink to="/signin">Ambassadors</FooterLink>
<FooterLink to="/signin">Agency</FooterLink>
<FooterLink to="/signin">Influencer</FooterLink>
</FooterLinkItems>
<FooterLinkItems>
<FooterLinkTitle>Social Media</FooterLinkTitle>
<FooterLink to="/signin">Instagram</FooterLink>
<FooterLink to="/signin">Facebook</FooterLink>
<FooterLink to="/signin">YouTube</FooterLink>
<FooterLink to="/signin">Twitter</FooterLink>
</FooterLinkItems>
</FooterLinksWrapper>
</FooterLinksContainer>

</FooterContainer>
);
};

export default Footer;