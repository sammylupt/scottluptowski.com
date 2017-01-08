// @flow

import React, { Component } from 'react'
import { Match, propTypes } from 'react-router'

class MatchWrapper extends Component {


  static contextTypes = {
    history: propTypes.historyContext.isRequired
  }

  historyUnlisten: () => void

  componentDidMount() {
    const { context } = this
    this.historyUnlisten = context.history.listen(() => this.scrollToTop())
  }

  componentWillUnmount() {
    this.historyUnlisten()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return <Match {...this.props} />
  }
}

export default MatchWrapper
