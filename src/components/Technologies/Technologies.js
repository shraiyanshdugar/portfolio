import React from 'react';
import { DiFirebase, DiReact, DiRequirejs, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development and testing.
      from Back-end to Design to testing
     </SectionText>
     <List>
       <ListItem>
         <DiReact size ="3rem"/>
         <ListContainer>
           <ListTitle> Front-End</ListTitle>
           <ListParagraph>
             Experience with React.js
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiFirebase size ="3rem"/>
         <ListContainer>
           <ListTitle> Back-End</ListTitle>
           <ListParagraph>
             Experience with Node, Express and Databases
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiRequirejs size ="3rem"/>
         <ListContainer>
           <ListTitle> Testing</ListTitle>
           <ListParagraph>
             Experience with Selenium, Puppeteer
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>
  </Section>
);

export default Technologies;
