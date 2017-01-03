// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'

import Image from '../components/Image'
import type { Project, ProjectLink, ImageWithMeta } from '../types'

class ProjectPage extends Component {

  props: Project

  render() {
    const { links, images, name, summary } = this.props
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

        <div className="project-links">
          <div>Links:</div>
            {
              links.map((link: ProjectLink, i: number) => {
                return (
                  <div key={i} className="project-link">
                    <a href={link.url} target="_blank">{link.title}</a>
                    { link.meta &&
                      <span className="link-meta">{link.meta}</span>
                    }
                  </div>
                )
              })
            }
        </div>
        <div className="project-images">
          {
            images.map((image: ImageWithMeta, i: number) => {
              const { description, ...rest } = image

              return (
                <div className="project-image" key={i}>
                  <Image
                    {...rest}
                  />
                  { image.description &&
                    <div className="project-image-description">
                      {description}
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ProjectPage
