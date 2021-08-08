import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Open Source Projects'},
  { number: 2, text: 'Internship', },
  { number: 1355, text: 'Hackerearth rating', },
  { number: 1200, text: 'Chess.com Rating', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) =>
      <Box key ={index}>
        <BoxNum>{card.number} +</BoxNum>
        <BoxText>{card.text}</BoxText>

      </Box>
      )}
    </Boxes>

  </Section>
);

export default Acomplishments;
