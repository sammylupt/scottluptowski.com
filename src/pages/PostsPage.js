// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'
import type { Link } from '../types'
import ItemList from '../components/ItemList'

class PostsPage extends Component {

  props: {
    posts: Array<Link>
  }

  render() {
    const { posts } = this.props

    return (
      <div className="section-header">
        <ReactDocumentTitle
          title="Scott Luptowski | Posts"
        />
        <p>Here are some links to posts I've written about software development:</p>

        <ItemList links={posts} />
      </div>
    )
  }
}


export default PostsPage
