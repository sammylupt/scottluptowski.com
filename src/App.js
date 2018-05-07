// @flow

import React, { Component } from 'react'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import ReactDocumentTitle from 'react-document-title'
import styled from 'styled-components'
import ReactGA from 'react-ga'

import Menu from './components/Menu'
import Footer from './components/Footer'
import ProjectListPage from './pages/ProjectListPage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import PageNotFound from './components/PageNotFound'

import { projects, posts, links } from './data'
import type { Project, LocationProps } from './types'
import { small, large } from './utils'

const GA_ID = 'UA-7600440-11'

const renderProjectOrMiss = ({ match }: LocationProps) => {
  const project: ?Project = projects.find(p => p.slug === match.params.project)

  if (project) {
    return <ProjectPage {...project} />
  } else {
    return <PageNotFound />
  }
}

const App = () => (
  <BrowserRouter>
    <AppInsideRouter />
  </BrowserRouter>
)

class AppWithSideEffects extends Component {
  componentDidMount() {
    ReactGA.initialize(GA_ID)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0)
      ReactGA.pageview(this.props.location.pathname)
      console.log(this.props.location.pathname)
    }
  }

  render() {
    return (
      <div>
        <ReactDocumentTitle title="Scott Luptowski" />
        <Menu />
        <RouteCountainer>
          <Route
            exact
            path="/"
            render={() => <ProjectListPage projects={projects} />}
          />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/posts" render={() => <PostsPage posts={posts} />} />
          <Route path="/projects/:project" render={renderProjectOrMiss} />
          <Route path="/contact" render={() => <ContactPage links={links} />} />
        </RouteCountainer>
        <Footer links={links} />
      </div>
    )
  }
}

const AppInsideRouter = withRouter(AppWithSideEffects)
export default App

const RouteCountainer = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 5em;

  ${small`
    width: 95%;
  `};
`
