// @flow

import React, { Component } from 'react'
import TweetEmbed from 'react-tweet-embed'

class ProjectTweetSection extends Component {

  props: {
    tweets: Array<string>
  }

  render() {
    const { tweets } = this.props

    return (
      <div>
        { tweets.map((tweet: string, i: number) => {
          return (
            <div className="tweet-wrapper" key={i}>
              <TweetEmbed id={tweet} />
            </div>
          )
          })
        }
      </div>
    )
  }
}

export default ProjectTweetSection
