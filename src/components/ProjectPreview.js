// @flow

import React, { Component } from 'react'
import { Link } from 'react-router'
import Image from '../components/Image'
import type { Project } from '../types'

class ProjectPreview extends Component {

  props: Project

  render() {
    const { slug, name, featuredImage } = this.props

    return (
      <div className="project-preview">
        <Link to={`/projects/${slug}`}>
          <div>
            <Image {...featuredImage}/>
            <div>{name}</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default ProjectPreview
