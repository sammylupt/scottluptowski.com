// @flow

import React, { Component } from 'react'
import { Match as ReactRouterMatch, propTypes } from 'react-router'

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

let historyListener = null

class Match extends Component {

  static contextTypes = {
    history: propTypes.historyContext.isRequired
  }

  componentDidMount() {
    const { history } = this.context
    historyListener || (historyListener = history.listen(scrollToTop))
  }

  componentWillUnmount() {
    historyListener = null
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return <ReactRouterMatch {...this.props} />
  }
}

export default Match
