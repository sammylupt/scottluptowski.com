// @flow

import React, { Component } from 'react'
import ProjectPreview from '../components/ProjectPreview'
import styled from 'styled-components'

import type { Project } from '../types'

const ProjectList = ({ projects }: { projects: Array<Project> }) => (
  <div>
    <Title>
      Software Developer & Creative Technologist in
      {' '}
      <Nowrap>New York City</Nowrap>
    </Title>
    <ProjectListingsContainer>
      {projects.map((project: Project, i: number) => {
        return <ProjectPreview key={i} {...project} />
      })}
    </ProjectListingsContainer>
  </div>
)

export default ProjectList

const Nowrap = styled.span`
  white-space: nowrap;
`

const Title = styled.p`
  background-color: #cccccc;
  padding: 1em;
  margin: 1em auto;
  text-align: center;
  font-size: 1.25em;
  border: 1px solid black;
`

const ProjectListingsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`
