// @flow

import React, { Component } from 'react'
import ProjectPreview from '../components/ProjectPreview'
import styled, { keyframes } from 'styled-components'
import { small, large } from '../utils'
import type { Project } from '../types'

const ProjectList = ({ projects }: { projects: Array<Project> }) => (
  <div>
    <Title>
      Scott Luptowski is a Software Developer and Creative Technologist in <Nowrap>New York City</Nowrap>
    </Title>
    <ProjectListingsContainer>
      {projects.map((project: Project, i: number) => {
        return <ProjectPreview key={i} {...project} />
      })}
    </ProjectListingsContainer>
  </div>
)

export default ProjectList

const rotate = keyframes`
  0%, 100% { transform: rotate(-5deg) }
  50% { transform: rotate(5deg) }
`

const Nowrap = styled.span`
  white-space: nowrap;
`

const Title = styled.p`
  padding-bottom: 1em;
  font-weight: 600;
  text-align: center;
  color: rgba(45,55,65,.95);
  animation: ${rotate} 8s linear infinite;
  margin: 0 auto;

  ${large`
    font-size: 50px;
    line-height: 80px;
  `}

  ${small`
    font-size: 24px;
    line-height: 38px;
    max-width: 95%;
  `}
`

const ProjectListingsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`
