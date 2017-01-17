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
              <ProjectLinkListing div key={i}>
                <a href={link.url} target="_blank">{link.title}</a>
                { link.meta &&
                  <LinkMeta>{link.meta}</LinkMeta>
                }
              </ProjectLinkListing>
            )
          })
        }
      </div>
    )
  }
}

const ProjectLinkListing = s.div`
  margin-bottom: 0.25em
`

const LinkMeta = s.span`
  margin-left: .25em;

  @media (max-width: 800px) {
    display: block;
    font-size: .75em;
  }
`

export default ProjectLinkSection

