// @flow

import React, { Component } from 'react'

import Image from './Image'
import type { ImageWithMeta } from '../types'

class ProjectImageList extends Component {

  props: {
    images: Array<ImageWithMeta>
  }

  render() {
    const { images } = this.props;

    return (
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
    )
  }
}

export default ProjectImageList
