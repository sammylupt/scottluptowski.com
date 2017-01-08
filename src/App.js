// @flow

import React, { Component } from 'react'
import { Miss } from 'react-router'
import Match from './components/Match'
import { BrowserRouter } from 'react-g-analytics'
import ReactDocumentTitle from 'react-document-title'

import Menu from './components/Menu'
import ProjectListPage from './pages/ProjectListPage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import PageNotFound from './components/PageNotFound'

import { projects, posts, links } from './data'
import type { Project, LocationProps } from './types'

const renderProjectOrMiss = ({params}: LocationProps) => {
  const project: ?Project = projects.find((p) => p.slug === params.project)

  if (project) {
    return (<ProjectPage {...project} />)
  } else {
    return (<PageNotFound/>)
  }
}

class App extends Component {

  render() {
    return (
      <BrowserRouter id="UA-7600440-11">
        <div className="app-wrapper">
          <div className="app-content">
            <ReactDocumentTitle
              title="Scott Luptowski"
            />
            <Menu />
            <div className="route-container">
              <Match
                exactly
                pattern="/"
                render={() => <ProjectListPage projects={projects}/>}
              />
              <Match
                pattern="/about"
                component={AboutPage}
              />
              <Match
                pattern="/posts"
                render={() => <PostsPage posts={posts} />}
              />
              <Match
                pattern="/projects/:project"
                render={renderProjectOrMiss}
              />
              <Match
                pattern="/contact"
                render={() => <ContactPage links={links} />}
              />
              <Miss component={PageNotFound} />
            </div>
          </div>
          <footer>
            © 2017 Scott Luptowski
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
