// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'

class About extends Component {

  render() {
    return (
      <div className="section-header">
        <ReactDocumentTitle
          title="Scott Luptowski | About"
        />
        <p>I'm a Product Engineer at Many by Many.</p>

        <p>From Atlanta, I'm now living in Brooklyn after stints in Chicago and Sweden.</p>

        <p>My languages of choice are Ruby, JavaScript, Elixir, and Clojure. When I'm AFK I enjoy travel, food, live music, and bike riding.</p>

        <div className="quote-section">
          <div className="press-quote">
            "Enjoys both pop culture and looking at tweets"
            <div className="press-attribution">BuzzFeed</div>
            </div>
          <div className="press-quote">
            "This guy"
            <div className="press-attribution">Gawker</div>
            </div>
          <div className="press-quote">
            "A JavaScript ninja who wants to be on the bleeding edge of technology"
            <div className="press-attribution">Unsolicited recruiter message on LinkedIn</div>
            </div>
        </div>
      </div>
    )
  }
}

export default About
