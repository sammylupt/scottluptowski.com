---
layout: post
title:  "Creating my first gem" 
date:   2013-10-22 08:21:00
categories: posts
excerpt: A few weeks ago, I built a Ruby script to find the current standings of the English Premier League and display them in the terminal. I decided to turn my standalone script into a gem called Standings.
---

A few weeks ago, I built a Ruby script to find the current standings of the English Premier League and display them in the terminal. I decided to turn my standalone script into a gem called [Standings](http://rubygems.org/gems/standings), and the process was both easier and harder than I imagined.

Gems are built using a file called a .gemspec, which contains a list of metadata about your gem. It includes things like the version number, author's name, and a list of runtime depencies (gems which will automatically download if you do not already have them).

Before I began the gem process, I assumed that the hardest part would be allowing computers to run the gem by typing its name directly from the command line, rather than inside of a pry session. It turns out that this was one of the easiest parts.

```ruby
# Add this line in your gemspec:
s.executables << 'your_gem_name'

# And create a file called bin/your_gem_name
# with this text

#!/usr/bin/env ruby
require 'your_gem_name'

```
It turns out that what you're doing here is adding information about the gem to your system's PATH, which lets you call it from bash. Everything made more sense once I understood that.

Another issue I had was with properly requiring the correct files inside my actual gem. In a worrying turn of events, my computer read my code properly, while a classmate's gem installation process did not work. My problem was in code which required all necessary files: some file invoked classes which were not yet defined, leaving Ruby very confused. I rearranged the ```require_relative``` statements and it worked fine, but I'm still not sure what caused the error on one computer and not the other.

When it came to actual deployment, pushing the gem was painless. I created an account on Rubygems.org and typed ```gem push standings``` from my terminal. In the future I'd like to add error handling, better notifications, and more documentation. I'd also like to include more soccer leagues via implementation of command line arguments.

Overall this was a great experience and I can't wait to continue to play with the gem.