// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'
import s from 'styled-components'

import ProjectImageList from '../components/ProjectImageList'
import ProjectLinkSection from '../components/ProjectLinkSection'
import ProjectTweetSection from '../components/ProjectTweetSection'
import type { Project } from '../types'

class ProjectPage extends Component {

  props: Project

  render() {
    const { links, images, name, summary, tweets } = this.props
    const pageTitle = `Scott Luptowski | Projects | ${name}`

    return (
      <ProjectPageWrapper>
        <ReactDocumentTitle
          title={pageTitle}
        />

        <Header>{name}</Header>
        <div className="project-summary">
           { summary() }
        </div>

        <ProjectLinkSection links={links} />

        { images && <ProjectImageList images={images} /> }

        { tweets && <ProjectTweetSection tweets={tweets} /> }

      </ProjectPageWrapper>
    )
  }
}

export default ProjectPage

const ProjectPageWrapper = s.div`
  text-align: center;
  margin: 0 auto;
`
const Header = s.p`
  font-size: 1.5em;
  margin: 1em auto;
`