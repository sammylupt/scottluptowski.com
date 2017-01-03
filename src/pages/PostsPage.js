// @flow

import React, { Component } from 'react'
import ReactDocumentTitle from 'react-document-title'
import type { Link } from '../types'

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
        {
          posts.map((post: Link, i: number) => {
            return (
              <div className="item-link" key={i}>
                <a
                  href={post.url}
                  target="_blank"
                >
                  {post.title}
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PostsPage
