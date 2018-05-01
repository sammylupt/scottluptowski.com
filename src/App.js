// @flow

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDocumentTitle from 'react-document-title'
import styled from 'styled-components'

import Menu from './components/Menu'
import ProjectListPage from './pages/ProjectListPage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import PageNotFound from './components/PageNotFound'

import { projects, posts, links } from './data'
import type { Project, LocationProps } from './types'
import { small, large } from './utils'

const GA_ID = "UA-7600440-11";

const renderProjectOrMiss = ({ match }: LocationProps) => {
  const project: ?Project = projects.find(p => p.slug === match.params.project)

  if (project) {
    return <ProjectPage {...project} />
  } else {
    return <PageNotFound />
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
            <Route
              path="/posts"
              render={() => <PostsPage posts={posts} />}
            />
            <Route path="/projects/:project" render={renderProjectOrMiss} />
            <Route
              path="/contact"
              render={() => <ContactPage links={links} />}
            />
          </RouteCountainer>
          <Footer>
            © 2018 Scott Luptowski
          </Footer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

const RouteCountainer = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 5em;

  ${small`
    width: 95%;
  `}
`

const Footer = styled.footer`
  font-size: .7em;
  text-align: center;
  margin: 2em auto 1em;
  padding-bottom: .5em;
`
