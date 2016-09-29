// @flow

import React, { Component } from 'react'
import Helmet from 'react-helmet'
import type { Post } from '../types'

class PostsPage extends Component {

  props: {
    posts: Array<Post>
  }

  render() {
    const { posts } = this.props

    return (
      <div className="section-header">
        <Helmet
          title="Scott Luptowski | Posts"
        />
        <p>Here are some links to posts I've written about software development:</p>
        {
          posts.map((post: Post, i: number) => {
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
