// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'

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
      <div className="project-page">
        <ReactDocumentTitle
          title={pageTitle}
        />

        <p className="project-header">{name}</p>
        <p className="project-summary"
           dangerouslySetInnerHTML={{__html: summary}}
        />

        <ProjectLinkSection links={links} />

        { images &&
          <ProjectImageList images={images} />
        }

        { tweets &&
          <ProjectTweetSection tweets={tweets} />
        }
      </div>
    )
  }
}

export default ProjectPage
