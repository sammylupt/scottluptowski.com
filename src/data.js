// @flow
import React from 'react'
import type { Project, Link } from './types'
import styled from 'styled-components'

const projects: Array<Project> = [
  {
    name: 'Hamiltowned',
    slug: 'hamiltowned',
    summary: () => (
      <div>
        <p>
          Prank your friends by sending them a fake Hamilton lottery winning email. Hamiltowned was live for less than 48 hours thanks to a legal threat from lawyers representing Hamilton, but managed to prank thousands of unsuspecting recipients.
        </p>

        <Featured>
          "Best prank of 2016" - Gawker
        </Featured>
      </div>
    ),
    links: [
      {
        url: 'http://gawker.com/tricking-someone-into-believing-they-won-the-hamilton-l-1783463868',
        title: 'Gawker'
      },
      {
        url: 'https://www.buzzfeed.com/katienotopoulos/lawyers-for-hamilton-shut-down-this-prank-tickets-site',
        title: 'BuzzFeed'
      },
      {
        url: 'http://www.stitcher.com/podcast/buzzfeeds-internet-explorer/e/dicks-out-for-harambe-46506091',
        title: 'Internet Explorer Podcast',
        meta: '(Jump to 25:53)'
      },
      {
        url: 'http://gothamist.com/2016/07/08/hamilton_safety_first.php',
        title: 'Gothamist'
      }
    ],
    featuredImage: {
      src: 'hamiltowned/preview.jpg',
      alt: 'Hamiltowned'
    },
    images: [
      {
        src: 'hamiltowned/1.png',
        alt: 'Hamiltowned',
        description: "Enter your name, your friend's name, and their email address"
      },
      {
        src: 'hamiltowned/2.png',
        alt: 'Hamiltowned',
        description: 'Your friend will receive an email informing them that they won the lottery, complete with a link to purchase their ticket'
      },
      {
        src: 'hamiltowned/3.png',
        alt: 'Hamiltowned',
        description: 'The ticket link in the email brought the recipient to a page where they found out they were pranked'
      }
    ]
  },
  {
    name: 'Nicolas Cage Roulette',
    slug: 'nicolas-cage-roulette',
    summary: () => (
      <div>
        Nicolas Cage Roulette lets you stream random Nicolas Cage movies on Netflix. Just choose from 'Action Movies' or 'All Movies' and start watching.
      </div>
    ),
    links: [
      {
        url: 'http://www.nicolascageroulette.com',
        title: 'Play Nicolas Cage Roulette'
      },
      {
        url: 'http://www.fastcocreate.com/1682547/netflix-users-play-nicolas-cage-roulette-never-lose',
        title: 'Fast Company'
      },
      {
        url: 'http://www.huffingtonpost.com/2013/03/05/nicolas-cage-roulette-netflix_n_2811850.html',
        title: 'The Huffington Post'
      },
      {
        url: 'http://mashable.com/2013/03/04/nicolas-cage-roulette/',
        title: 'Mashable'
      },
      {
        url: 'http://www.buzzfeed.com/erinlarosa/nicolas-cage-roulette-is-just-as-awesome-as-it-sounds',
        title: 'BuzzFeed'
      }
    ],
    featuredImage: {
      src: 'nicolas-cage-roulette/preview.png',
      alt: 'Nicolas Cage Roulette'
    },
    images: [
      {
        src: 'nicolas-cage-roulette/1.png',
        alt: 'Nicolas Cage Roulette'
      }
    ]
  },
  {
    name: 'Browse With Guy',
    slug: 'browse-with-guy',
    summary: () => (
      <div>
        <p>
          Browse With Guy is a Chrome Extension that covers every webpage you visit with the same photo of Guy Fieri. It was built for the
          {' '}
          <a href="http://www.stupidhackathon.com/" target="_blank">
            2016 Stupid Shit No One Needs and Terrible Ideas Hackathon
          </a>
          .
        </p>

        <p>
          <a
            href="https://chrome.google.com/webstore/detail/browse-with-guy/pffcpolokheijlggcplcbkadpgkhmomj/reviews?hl=en-US"
            target="_blank"
          >
            Download on the Chrome Store
          </a>
        </p>
      </div>
    ),
    links: [
      {
        url: 'http://nymag.com/following/2016/02/stupid-hackathon-actually-very-good-and-funny.html',
        title: 'New York Magazine'
      },
      {
        url: 'https://github.com/scottluptowski/browse-with-guy',
        title: 'View source on GitHub'
      }
    ],
    featuredImage: {
      src: 'browse-with-guy/1.jpg',
      alt: 'Browse With Guy'
    },
    images: [
      {
        src: 'browse-with-guy/1.jpg',
        alt: 'Browse With Guy'
      }
    ]
  },
  {
    name: 'SVU EBooks',
    slug: 'svu-ebooks',
    summary: () => (
      <div>
        SVU EBooks is a series of fake Law and Order SVU episode summaries I generated. I gathered the summary of every SVU episode from Hulu, IMDb, and Rotten Tomatoes, and used a Markov Chain library to predict new episodes.
      </div>
    ),
    links: [
      {
        url: 'http://mashable.com/2017/01/03/law-and-order-svu-episode-generator/',
        title: 'Mashable'
      },
      {
        url: 'https://github.com/scottluptowski/svu_ebooks',
        title: 'View source on GitHub'
      }
    ],
    featuredImage: {
      src: 'svu-ebooks/preview.jpg',
      alt: 'SVU Ebooks'
    },
    tweets: ['816304367926181888', '816345955360448512']
  },
  {
    name: 'Trump Siren',
    slug: 'trump-siren',
    summary: () => (
      <div>
        Built with
        {' '}
        <a href="https://twitter.com/ianrsolano" target="_blank">
          Ian Solano
        </a>
        , Trump Siren is an Arduino connected to a police siren that turns on and spins every time Donald Trump sends a tweet.
      </div>
    ),
    links: [
      {
        url: 'https://github.com/scottluptowski/trump-siren',
        title: 'View source on GitHub'
      }
    ],
    featuredImage: {
      src: 'trump-siren/preview.jpg',
      alt: 'Trump Siren'
    },
    images: [
      {
        src: 'trump-siren/trump-siren.gif',
        alt: 'Trump Siren',
        description: 'Trump Siren spins for five seconds every time Donald Trump sends a tweet'
      }
    ]
  },
  {
    name: 'Standings',
    slug: 'standings',
    summary: () => (
      <div>
        <p>
          Standings is a command line Ruby gem that displays the current results of European soccer/football leagues.
        </p>
        <p>To install, run the following command from your shell:</p>
        <Code>
          $ gem install standings
        </Code>
      </div>
    ),
    links: [
      {
        url: 'https://rubygems.org/gems/standings',
        title: 'RubyGems'
      },
      {
        url: 'https://github.com/scottluptowski/standings',
        title: 'View source on GitHub'
      }
    ],
    featuredImage: {
      src: 'standings/preview.png',
      alt: 'Standings'
    },
    images: [
      {
        src: 'standings/1.png',
        alt: 'See Soccer standings in your terminal with the Standings gem'
      }
    ]
  },
  {
    name: 'New York Times or Jenny Holzer?',
    slug: 'new-york-times-or-jenny-holzer',
    summary: () => (
      <div>
        <p>
          This is a guessing game between random text snippets from the work of Jenny Holzer and tweets from the New York Times Minus Context twitter account.
        </p>
        <p>
          Built with React and hosted on AWS S3, this is also the first (and only!) app I've built with Alt.
        </p>
      </div>
    ),
    links: [
      {
        url: 'http://www.newyorktimesorjennyholzer.com',
        title: 'Play New York Times or Jenny Holzer?'
      },
      {
        url: 'https://github.com/scottluptowski/newyorktimesorjennyholzer',
        title: 'View source on GitHub'
      }
    ],
    featuredImage: {
      src: 'new-york-times-or-jenny-holzer/preview.png',
      alt: 'New York Times or Jenny Holzer?'
    },
    images: [
      {
        src: 'new-york-times-or-jenny-holzer/1.png',
        alt: 'New York Times or Jenny Holzer?'
      }
    ]
  },
  {
    name: 'spoil.rs',
    slug: 'spoilrs',
    summary: () => (
      <div>
        <p>
          Spoil.rs was a spoiler tag for Twitter. It was a way to embed a hidden spoiler in your tweets so you don't ruin TV and movies for others. Users would type in a tweet and a secret, and Spoil.rs would post the tweet with a link to see the secret.
        </p>
        <p>
          The site was up for a few months in Summer 2013. Spoil.rs was built with the LAMP stack.
        </p>
      </div>
    ),
    links: [
      {
        url: 'http://www.forbes.com/sites/ewanspence/2013/05/28/tweeting-out-spoilers-without-spoiling-the-fun',
        title: 'Forbes'
      },
      {
        url: 'http://techland.time.com/2013/05/29/spoil-rs-helps-you-hide-spoilers-on-twitter/',
        title: 'Time'
      }
    ],
    featuredImage: {
      src: 'spoilrs/preview.png',
      alt: 'Spoil.rs'
    },
    images: [
      {
        src: 'spoilrs/1.png',
        alt: 'Spoil.rs',
        description: 'After logging into Spoil.rs with their Twitter login credentials, users would enter a message and a secret. This would send a tweet that contained the message and a link to the secret'
      },
      {
        src: 'spoilrs/2.gif',
        alt: 'Spoil.rs',
        description: 'After clicking through the link in the tweet, users could move their mouse over (or touch) the bars to reveal the secret text below'
      }
    ]
  }
]

const posts: Array<Link> = [
  {
    title: 'Code Sharing Between React Native and React Web Apps',
    url: 'https://medium.com/the-many/code-sharing-between-react-native-and-react-web-apps-b1e1de22fc53'
  },
  {
    title: 'Learning Elixir By Building a Happy Number Finder',
    url: 'https://medium.com/the-many/learning-elixir-by-building-a-happy-number-finder-652b0b4b0f2d'
  },
  {
    title: 'Adding Login and Authentication Sections to your React or React Native app',
    url: 'https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1'
  },
  {
    title: 'Handling Android Back Button Events in React Native with Custom Components',
    url: 'https://medium.com/the-many/handling-android-back-button-events-in-react-native-with-custom-components-b33c63b0633b'
  }
]

const links: Array<Link> = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/scottluptowski'
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@scottluptowski'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/scottluptowski'
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/scottluptowski/'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/scottluptowski'
  }
]

const Featured = styled.div`
  display: inline-block;
  padding: .5em;
  background-color: #c0ffee;
  color: black;
`

const Code = styled(Featured)`
  font-family: 'Courier', 'Courier New', monospace, serif;
  color: white;
  background-color: black;
`

export { projects, posts, links }
