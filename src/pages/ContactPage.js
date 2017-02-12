// @flow

import React, { Component } from 'react'
import type { Link } from '../types'
import ReactDocumentTitle from 'react-document-title'
import ItemList from '../components/ItemList'

class ContactPage extends Component {

  props: {
    links: Array<Link>
  }

  render() {
    const { links } = this.props

    return (
      <div className="section-header">
        <ReactDocumentTitle
          title="Scott Luptowski | Contact"
        />
        <p>Get in touch:</p>

        <ItemList links={links} />
      </div>
    )
  }
}

export default ContactPage
