// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'
import styled from 'styled-components'

import ProjectImageList from '../components/ProjectImageList'
import ProjectLinkSection from '../components/ProjectLinkSection'
import ProjectTweetSection from '../components/ProjectTweetSection'
import type { Project } from '../types'

const ProjectPage = ({ links, images, name, summary, tweets }: Project) => (
  <ProjectPageWrapper>
    <ReactDocumentTitle title={`Scott Luptowski | Projects | ${name}`} />

    <Header>{name}</Header>

    {summary()}

    <ProjectLinkSection links={links} />

    {images && <ProjectImageList images={images} />}

    {tweets && <ProjectTweetSection tweets={tweets} />}

  </ProjectPageWrapper>
)

export default ProjectPage

const ProjectPageWrapper = styled.div`
  text-align: center;
  margin: 0 auto;

  p {
    margin-bottom: 1em;
  }
`
const Header = styled.h2`
  font-weight: normal;
  font-size: 1.5em;
  margin: 1em auto;
`
