// @flow

import React, { Component } from 'react'
import type { Link } from '../types'
import Helmet from 'react-helmet'

class ContactPage extends Component {

  props: {
    links: Array<Link>
  }

  render() {
    const { links } = this.props

    return (
      <div className="section-header">
        <Helmet
          title="Scott Luptowski | Contact"
        />
        <p>Get in touch:</p>
        {
          links.map((link: Link, i: number) => {
            return (
              <div className="item-link" key={i}>
                <a target="_blank" href={link.url}>
                  {link.title}
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ContactPage
