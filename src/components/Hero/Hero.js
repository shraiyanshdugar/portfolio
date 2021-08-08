import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
<LeftSection>
  <SectionTitle main centre>
    Hello amigos <br/>
    Welcome
  </SectionTitle>
  <SectionText>
    Learning is never ending curve, so just trying to keep up.
  </SectionText>
  <Button onClick= { () => window.location="https://drive.google.com/file/d/1fnalKgEtJx-iot83t5HYAaUjTmHS6GBN/view?usp=sharing"
  }>Learn More</Button>
</LeftSection>
  </Section>
);

export default Hero;