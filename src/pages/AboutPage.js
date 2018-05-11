// @flow

import React from 'react'
import ReactDocumentTitle from 'react-document-title'
import styled from 'styled-components'
import { small } from '../utils'
import { PageContainer } from '../components/shared'

const AboutPage = () => (
  <PageContainer>
    <ReactDocumentTitle title="Scott Luptowski | About" />
    <p>
      I'm a developer at{' '}
      <a href="http://www.greenhouse.io" target="_blank">
        Greenhouse
      </a>.
    </p>

    <p>
      From Atlanta, I'm now living in Brooklyn after stints in Chicago and
      Sweden.
    </p>

    <p>
      My languages of choice are JavaScript, Ruby, Elixir, and Clojure. When I'm
      AFK I enjoy travel, food, live music, and bike riding.
    </p>
    <QuoteSection>
      <PressQuote>
        "Enjoys both pop culture and looking at tweets"
        <cite>BuzzFeed</cite>
      </PressQuote>
      <PressQuote>
        "This guy"
        <cite>Gawker</cite>
      </PressQuote>
      <PressQuote>
        "A JavaScript ninja who wants to be on the bleeding edge of technology"
        <cite>Unsolicited recruiter message on LinkedIn</cite>
      </PressQuote>
    </QuoteSection>
  </PageContainer>
)

const PressQuote = styled.blockquote`
  margin-bottom: 1em;

  cite {
    display: block;
    padding-left: 2em;
    font-weight: bold;
    font-style: italic;

    &:before {
      content: "- ";
    }

    ${small`
      padding-left: 1em;
    `}
  }
}
`

const QuoteSection = styled.div`
  padding-top: 1em;

  &:before {
    content: '*******';
    display: block;
    font-size: 1.5em;
    margin: 0 auto 1em;
    text-align: center;
  }
`

export default AboutPage
