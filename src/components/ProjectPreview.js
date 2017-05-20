// @flow

import React, { Component } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import Image from '../components/Image'
import type { Project } from '../types'

class ProjectPreview extends Component {
  props: Project

  render() {
    const { slug, name, featuredImage } = this.props

    return (
      <ProjectPreviewBlock>
        <Link to={`/projects/${slug}`}>
          <div>
            <Image {...featuredImage} />
            <div>{name}</div>
          </div>
        </Link>
      </ProjectPreviewBlock>
    )
  }
}

const ProjectPreviewBlock = styled.div`
  max-width: 400px;
  margin: 0 auto 2em;

  @media (max-width: 1000px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 4em;
  }
`

export default ProjectPreview
