// @flow

import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import styled from 'styled-components'

const ProjectTweetSection = ({ tweets }: { tweets: Array<string> }) => (
  <div>
    {tweets.map((tweet: string, i: number) => (
      <TweetWrapper key={i}>
        <TweetEmbed id={tweet} />
      </TweetWrapper>
    ))}
  </div>
)

const TweetWrapper = styled.div`
  // this class is added dynamically by calling Twitter's js
  .twitter-tweet {
    margin: 0 auto 2em !important;
  }
`

export default ProjectTweetSection
