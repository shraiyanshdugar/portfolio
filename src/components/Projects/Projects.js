import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const myprojects=[{
  title:"Project 1",
  description:"it was hard to make",
  link:"github link"
},
{
  title:"Project 2",
  description:"it was hard to make",
  link:"github link"
},
{
  title:"Project 3",
  description:"it was hard to make",
  link:"github link"
},
{
  title:"Project 4",
  description:"it was hard to make",
  link:"github link"
}
]

const Projects = () => (
  <Section nopadding id="projects">

    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
        <BlogCard key ={project.id}>
          
          <TitleContent>
            <HeaderThree title>
              {project.title}
            </HeaderThree>
            <Hr/>
            <CardInfo>{project.description}</CardInfo>
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
          <TagList>
            {project.tags.map((tag,i) =>
              ( 
                <Tag key= {i}> {tag}</Tag>
            ))} 
          </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href ={project.visit}>
              Code
            </ExternalLinks>
          </UtilityList>

        </BlogCard>

      ))}
    </GridContainer>

    </Section>

);

export default Projects;