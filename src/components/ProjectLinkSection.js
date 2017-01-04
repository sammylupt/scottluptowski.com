// @flow

import React, { Component } from 'react'
import type { ProjectLink } from '../types'

class ProjectLinkSection extends Component {

  props: {
    links: Array<ProjectLink>
  }

  render() {
    const { links } = this.props

    return (
      <div className="project-links">
        <div>Links:</div>

        { links.map((link: ProjectLink, i: number) => {
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
    )
  }
}

export default ProjectLinkSection
