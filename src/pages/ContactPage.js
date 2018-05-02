// @flow

import React, { Component } from 'react'
import type { Link } from '../types'
import ReactDocumentTitle from 'react-document-title'
import ItemList from '../components/ItemList'

// not really using this page anymore, keeping it around so links don't break
const ContactPage = ({ links }: { links: Array<Link> }) => (
  <div className="section-header">
    <ReactDocumentTitle title="Scott Luptowski | Contact" />

    <ItemList header={<p>Get in touch:</p>} links={links} />
  </div>
)

export default ContactPage
