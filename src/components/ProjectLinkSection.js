// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import type { ProjectLink } from '../types'

class ProjectLinkSection extends Component {
  props: {
    links: Array<ProjectLink>
  }

  render() {
    const { links } = this.props

    return (
      <ProjectLinkContainer>
        <div>Links:</div>

        {links.map((link: ProjectLink, i: number) => (
          <ProjectLinkListing key={i}>
            <a href={link.url} target="_blank">{link.title}</a>
            {link.meta && <LinkMeta>{link.meta}</LinkMeta>}
          </ProjectLinkListing>
        ))}
      </ProjectLinkContainer>
    )
  }
}

const ProjectLinkContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
`

const ProjectLinkListing = styled.div`
  margin-bottom: 0.25em
`

const LinkMeta = styled.span`
  margin-left: .25em;

  @media (max-width: 800px) {
    display: block;
    font-size: .75em;
  }
`

export default ProjectLinkSection
