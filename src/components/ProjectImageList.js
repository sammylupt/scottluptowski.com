// @flow

import React, { Component } from 'react'
import s from 'styled-components'

import Image from './Image'
import type { ImageWithMeta } from '../types'

class ProjectImageList extends Component {

  props: {
    images: Array<ImageWithMeta>
  }

  render() {
    const { images } = this.props;

    return (
      <div>
        {
          images.map((image: ImageWithMeta, i: number) => {
            const { description, ...rest } = image

            return (
              <ProjectImage>
                <Image {...rest} />

                { image.description &&
                  <ProjectImageDescription>
                    {description}
                  </ProjectImageDescription>
                }
              </ProjectImage>
            )
          })
        }
      </div>
    )
  }
}

const ProjectImage = s.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5em;
  max-width: 95%;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const ProjectImageDescription = s.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: .8em;
  margin: .5em 0 1em;
  color: #999999;
`


export default ProjectImageList
