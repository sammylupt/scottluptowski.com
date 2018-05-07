// @flow

import React from 'react'
import styled from 'styled-components'

import Image from './Image'
import type { ImageWithMeta } from '../types'

const ProjectImageList = ({ images }: { images: Array<ImageWithMeta> }) => (
  <div>
    {images.map((image: ImageWithMeta, i: number) => {
      const { description, ...rest } = image

      return (
        <ProjectImage key={i}>
          <Image {...rest} />

          {image.description && (
            <ProjectImageDescription>{description}</ProjectImageDescription>
          )}
        </ProjectImage>
      )
    })}
  </div>
)

const ProjectImage = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5em;
  max-width: 95%;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const ProjectImageDescription = styled.div`
  font-size: 0.8em;
  margin: 0.5em 0 1em;
  color: #999999;
`

export default ProjectImageList
