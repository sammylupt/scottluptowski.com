// @flow

import React, { Component } from 'react'
import TweetEmbed from 'react-tweet-embed'
import styled from 'styled-components'

class ProjectTweetSection extends Component {
  props: {
    tweets: Array<string>
  }

  render() {
    const { tweets } = this.props

    return (
      <div>
        {tweets.map((tweet: string, i: number) => (
          <TweetWrapper key={i}>
            <TweetEmbed id={tweet} />
          </TweetWrapper>
        ))}
      </div>
    )
  }
}

const TweetWrapper = styled.div`
  // this class is added dynamically by calling Twitter's js
  .twitter-tweet {
    margin: 0 auto 2em !important;
  }
`

export default ProjectTweetSection
