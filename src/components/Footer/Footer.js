import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

<LinkColumn>
<LinkTitle>Call</LinkTitle>
<LinkItem href ="tel:8559873145">
  8559873145
</LinkItem>

</LinkColumn>
<LinkColumn>
<LinkTitle>Email</LinkTitle>
<LinkItem href ="mailto:shraiyanshdugar@gmail.com">
  shraiyanshdugar@gmail.com
</LinkItem>

</LinkColumn>


      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Nature is best teacher and duality is it's first lesson.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href ="https://github.com/shraiyanshdugar">
        <AiFillGithub size="3rem"/> 
      </SocialIcons>
      <SocialIcons href ="https://www.linkedin.com/in/shraiyansh-dugar-097140169/">
        <AiFillLinkedin size="3rem"/> 
      </SocialIcons>
      <SocialIcons href ="https://www.instagram.com/dugarshraiyansh/">
        <AiFillInstagram size="3rem"/> 
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
