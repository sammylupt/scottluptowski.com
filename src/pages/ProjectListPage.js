// @flow

import React, { Component } from 'react'
import ProjectPreview from "../components/ProjectPreview"
import type { Project } from "../types"

class ProjectList extends Component {

  props: {
    projects: Array<Project>
  }

  render() {
    const { projects } = this.props

    return (
      <div>
        <p className="title-description">Software Developer & Creative Technologist in <span className="nowrap">New York City</span></p>
        <div className="project-listings">
          {
            projects.map((project: Project, i: number) => {
              return (
                <ProjectPreview
                  key={i}
                  {...project}
                />)
            })
          }
        </div>
      </div>
    )
  }
}

export default ProjectList
