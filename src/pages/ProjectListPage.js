// @flow

import React, { Component } from 'react'
import ProjectPreview from "../components/ProjectPreview"
import s from 'styled-components'

import type { Project } from "../types"

class ProjectList extends Component {

  props: {
    projects: Array<Project>
  }

  render() {
    const { projects } = this.props

    return (
      <div>
        <Title>
          Software Developer & Creative Technologist in <Nowrap>New York City</Nowrap>
        </Title>
        <ProjectListingsContainer>
          {
            projects.map((project: Project, i: number) => {
              return (
                <ProjectPreview
                  key={i}
                  {...project}
                />)
            })
          }
        </ProjectListingsContainer>
      </div>
    )
  }
}

export default ProjectList

const Nowrap = s.span`
  white-space: nowrap;
`

const Title = s.p`
  background-color: #cccccc;
  padding: 1em;
  margin: 1em auto;
  text-align: center;
  font-size: 1.25em;
  border: 1px solid black;
`

const ProjectListingsContainer = s.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`
