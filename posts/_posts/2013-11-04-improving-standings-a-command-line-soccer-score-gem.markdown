---
layout: post
title:  "Improving Standings, a Command Line Soccer Score Gem" 
date:   2013-11-04 20:57:00
categories: posts
---

In mid-October I detailed the process of creating my first gem: Standings, a command line gem which allows users to see the current standings of the English Premier League. I recently expanded the gem's functionality to allow users to see the scores from multiple European soccer leagues.

Improving the gem meant a massive restructure of my previous gem, which was designed with one league in mind. I'd like to talk about the challenges I faced and the decisions I made.

###**Command Line Arguments**
My first stop was to modify the construction of the program to take command line arguments. This required little work due to a great gem called [Trollop](http://rubygems.org/gems/trollop "Trollop").

Implementation was dead simple. At the start of my application, I define a block with all of the possible arguments: 

```ruby
opts = Trollop::options do
  opt :epl, "English Premier League"
  opt :liga, "La Liga"
#...
#...
end

```

When a user runs Standings with a valid command line argument, Trollop passes me a hash in the following format, and I grab the identity of the league. Trollop provides the logic for dealing with invalid command line arguments.

```ruby

$ standings --epl

opts = {:epl=>true,
 :liga=>false,
 #...
  }

league_selection = opts.keys.detect { |k| opts[k] } #=> :epl

```

###Logic and Layout

Converting my gem from one league to many leagues required lots of reorganization. My previous English league-specific iteration scraped the same page each time and hard-coded many facts specific to the English league. My class structure was very simple: a TableScraper, a Displayer, and a Team class which instantiated a new object for each team.

Including multiple leagues necessitated a more robust class structure. Each individual league has a number of idiosyncrasies that I needed to keep track of so I could abstract away the details from other classes. Namely, I needed to know the proper URL to scrape and each league's respective number of teams in the qualifying spots and relegation zones.

I decided to call this class League, though a better name would be LeagueReference: it exists as a central place of information about each league. It provides data such that the TableScraper class knows where to scrape and Displayer knows what to color.

I initially modelled this application as close to reality as possible, including the initialization of multiple leagues, i.e. ```epl = League.new(:epl)```.

###Challenges

I hit a snag, though: I needed all of this information accessible to other classes (namely, the TableScraper and the Displayer class). I couldn't simply instantiate a new League instance and reference that instance inside my other classes. So I made the decision to hold all league logic inside League class variables. 

In the real world, there is more than one instance of a league, but in my application there is only one League at a given time. I feel this was the best solution to the problem, even if it does not entirely model the real world.

###More to Come

In the future I would like to add even more leagues to the gem. Currently the number of leagues I use is limited by my data source. I would like to add logic to rely on multiple data sources; doing so would require refactoring the TableScraper class to give it instructions on new sources to scrape.

Ultimately, I would like to rely on a JSON API as a source of data rather than scraping; this would not only improve speed but would also provide me with added functionality based on the API's endpoints.