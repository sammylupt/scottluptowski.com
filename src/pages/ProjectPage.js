// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'
import TweetEmbed from 'react-tweet-embed'

import ProjectImageList from '../components/ProjectImageList'
import ProjectLinkSection from '../components/ProjectLinkSection'
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
          tweets.map((tweet: string, i: number) => {
            return (
              <TweetEmbed id={tweet} key={i}/>
            )
          })
        }
      </div>
    )
  }
}

export default ProjectPage
