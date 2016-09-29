// @flow

import type { Project, Post } from './types'

const projects: Array<Project> = [
  {
    name: "Hamiltowned",
    slug: "hamiltowned",
    summary: `
      <div>
        Prank your friends by sending them a fake Hamilton lottery winning email. Hamiltowned was live for less than 48 hours thanks to a legal threat from lawyers representing Hamilton, but managed to prank thousands of unsuspecting recipients.


        <div className="project-summary-block">
          <div className="project-summary-callout">
            "Best prank of 2016" - Gawker
          </div>
        </div>
      </div>
    `,
    links: [
      { 
        url: "http://gawker.com/tricking-someone-into-believing-they-won-the-hamilton-l-1783463868",
        name: "Gawker"
      },
      { 
        url: "https://www.buzzfeed.com/katienotopoulos/lawyers-for-hamilton-shut-down-this-prank-tickets-site",
        name: "BuzzFeed"
      },
      { 
        url: "http://www.stitcher.com/podcast/buzzfeeds-internet-explorer/e/dicks-out-for-harambe-46506091",
        name: "Internet Explorer Podcast",
        meta: "(Jump to 25:53)"
      },
      {
        url: "http://gothamist.com/2016/07/08/hamilton_safety_first.php",
        name: "Gothamist"
      }
    ],
    featuredImage: {
      src: "hamiltowned/preview.png",
      alt: "Hamiltowned"
    },
    images: [
      {
        src: "hamiltowned/1.png",
        alt: "Hamiltowned"
      },
      {
        src: "hamiltowned/2.png",
        alt: "Hamiltowned"
      },
      {
        src: "hamiltowned/3.png",
        alt: "Hamiltowned"
      }
    ],
  },
  {
    name: "Nicolas Cage Roulette",
    slug: "nicolas-cage-roulette",
    summary: `
      <div>
        Nicolas Cage Roulette lets you stream random Nicolas Cage movies on Netflix. Just choose from 'Action Movies' or 'All Movies' and start watching.
      </div>
    `,
    links: [
      {
        url: "http://www.nicolascageroulette.com",
        name: "Play Nicolas Cage Roulette"
      },
      {
        url: "http://www.fastcocreate.com/1682547/netflix-users-play-nicolas-cage-roulette-never-lose",
        name: "Fast Company"
      },
      {
        url: "http://www.huffingtonpost.com/2013/03/05/nicolas-cage-roulette-netflix_n_2811850.html",
        name: "The Huffington Post"
      },
      {
        url: "http://mashable.com/2013/03/04/nicolas-cage-roulette/",
        name: "Mashable"
      },
      {
        url: "http://www.buzzfeed.com/erinlarosa/nicolas-cage-roulette-is-just-as-awesome-as-it-sounds",
        name: "BuzzFeed"
      }
    ],
    featuredImage: {
      src: "nicolas-cage-roulette/preview.png",
      alt: "Nicolas Cage Roulette"
    },
    images: [
      {
        src: "nicolas-cage-roulette/1.png",
        alt: "Nicolas Cage Roulette"
      }
    ]
  },
  {
    name: "Browse With Guy",
    slug: "browse-with-guy",
    summary: `
      <div>
        Browse With Guy is a Chrome Extension that covers every webpage you visit with the same photo of Guy Fieri. It was built for the <a href="http://www.stupidhackathon.com/" target="_blank">2016 Stupid Shit No One Needs and Terrible Ideas Hackathon</a>.

        <div className="project-summary-block">
          <a href="https://chrome.google.com/webstore/detail/browse-with-guy/pffcpolokheijlggcplcbkadpgkhmomj/reviews?hl=en-US" target="_blank">Download on the Chrome Store</a>
        </div>
      </div>
    `,
    links: [
      {
        url: "http://nymag.com/following/2016/02/stupid-hackathon-actually-very-good-and-funny.html",
        name: "New York Magazine",
      },
      {
        url: "https://github.com/scottluptowski/browse-with-guy",
        name: "View source on GitHub",
      }
    ],
    featuredImage: {
      src: "browse-with-guy/1.jpg",
      alt: "Browse With Guy"
    },
    images: [
      {
        src: "browse-with-guy/1.jpg",
        alt: "Browse With Guy"
      }
    ]
  },
  {
    name: "Standings",
    slug: "standings",
    summary: `
      <div>
        Standings is a command line Ruby gem that displays the current results of European soccer/football leagues.
        <div className="project-summary-block">
          To install, run the following command from your shell:
          <div className="code-block">
            <code>
              $ gem install standings
            </code>
          </div>
        </div>
      </div>
    `,
    links: [
      {
        url: "https://rubygems.org/gems/standings",
        name: "RubyGems"
      },
      {
        url: "https://github.com/scottluptowski/standings",
        name: "View source on GitHub"
      }
    ],
    featuredImage: {
      src: "standings/preview.png",
      alt: "Standings"
    },
    images: [
      {
        src: "standings/1.png",
        alt: "See Soccer standings in your terminal with the Standings gem"
      }
    ]
  },
  {
    name: "New York Times or Jenny Holzer?",
    slug: "new-york-times-or-jenny-holzer",
    summary: `
      <div>
        <p>
        This is a guessing game between random text snippets from the work of Jenny Holzer and tweets from the New York Times Minus Context twitter account.
        </p>
        <p>
        Built with React and hosted on AWS S3, this is also the first (and only!) app I've built with Alt.
        </p>
      </div>
    `,
    links: [
      {
        url: "http://www.newyorktimesorjennyholzer.com",
        name: "Play New York Times or Jenny Holzer?"
      },
      {
        url: "https://github.com/scottluptowski/newyorktimesorjennyholzer",
        name: "View source on GitHub",
      }
    ],
    featuredImage: {
      src: "new-york-times-or-jenny-holzer/preview.png",
      alt: "New York Times or Jenny Holzer?"
    },
    images: [
      {
        src: "new-york-times-or-jenny-holzer/1.png",
        alt: "New York Times or Jenny Holzer?"
      }
    ]
  },
  {
    name: "spoil.rs",
    slug: "spoilrs",
    summary: `
      <div>
        <p>Spoil.rs was a spoiler tag for Twitter. It was a way to embed a hidden spoiler in your tweets so you don't ruin TV and movies for others. Users would type in a tweet and a secret, and Spoil.rs would post the tweet with a link to see the secret.</p>
        <p>The site was up for a few months in Summer 2013. Spoil.rs was built with the LAMP stack.</p>
      </div>
    `,
    links: [
      {
        url: "http://www.forbes.com/sites/ewanspence/2013/05/28/tweeting-out-spoilers-without-spoiling-the-fun",
        name: "Forbes"
      },
      {
        url: "http://techland.time.com/2013/05/29/spoil-rs-helps-you-hide-spoilers-on-twitter/",
        name: "Time"
      }
    ],
    featuredImage: {
      src: "spoilrs/preview.png",
      alt: "Spoil.rs"
    },
    images: [
      {
        src: "spoilrs/1.png",
        alt: "Spoil.rs"
      },
      {
        src: "spoilrs/2.gif",
        alt: "Spoil.rs"
      }
    ]
  }
]

const posts: Array<Post> = [
  {
    title: "Code Sharing Between React Native and React Web Apps",
    url: "https://medium.com/the-many/code-sharing-between-react-native-and-react-web-apps-b1e1de22fc53"
  },
  {
    title: "Learning Elixir By Building a Happy Number Finder",
    url: "https://medium.com/the-many/learning-elixir-by-building-a-happy-number-finder-652b0b4b0f2d"
  },
  {
    title: "Adding Login and Authentication Sections to your React or React Native app",
    url: "https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1"
  },
  {
    title: "Handling Android Back Button Events in React Native with Custom Components",
    url: "https://medium.com/the-many/handling-android-back-button-events-in-react-native-with-custom-components-b33c63b0633b"
  }
]

export { projects, posts }
