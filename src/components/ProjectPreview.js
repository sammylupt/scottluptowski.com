// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { below } from '../utils'
import Image from '../components/Image'
import type { Project } from '../types'

const ProjectPreview = ({ slug, name, featuredImage }: Project) => (
  <ProjectPreviewBlock>
    <Link to={`/projects/${slug}`}>
      <div>
        <Image {...featuredImage} />
        <ProjectName>{name}</ProjectName>
      </div>
    </Link>
  </ProjectPreviewBlock>
)

const ProjectPreviewBlock = styled.div`
  max-width: 400px;
  margin: 0 auto 2em;

  ${below(1000)`
    width: 350px;
  `}

  ${below(900)`
    width: 300px;
  `}

  ${below(640)`
    width: 100%;
    margin-bottom: 4em;
  `}
`

const ProjectName = styled.div`
  padding-top: 5px;
  letter-spacing: .25px;
`

export default ProjectPreview
