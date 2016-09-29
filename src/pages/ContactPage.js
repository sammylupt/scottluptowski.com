// @flow

import React, { Component } from 'react'
import Helmet from 'react-helmet'

class ContactPage extends Component {

  render() {
    return (
      <div className="section-header">
        <Helmet
          title="Scott Luptowski | Contact"
        />
        <p>Get in touch:</p>
          <div className="item-link">
            <a target="_blank"
              href="https://twitter.com/scottluptowski"
            >
              Twitter
            </a>
          </div>
          <div className="item-link">
            <a target="_blank"
              href="https://medium.com/@scottluptowski"
            >
              Medium
            </a>
          </div>
          <div className="item-link">
            <a target="_blank"
              href="https://github.com/scottluptowski"
            >
              GitHub
            </a>
          </div>
          <div className="item-link">
            <a target="_blank"
              href="https://www.instagram.com/scottluptowski/"
            >
              Instagram
            </a>
          </div>
          <div className="item-link">
            <a target="_blank"
              href="https://www.linkedin.com/in/scottluptowski"
            >
              LinkedIn
            </a>
          </div>
      </div>
    )
  }
}

export default ContactPage
