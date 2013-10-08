---
layout: post
title:  "Make it work, make it right, make it fast" 
date:   2013-10-08 08:22:10
categories: posts
---

Yesterday I wrote about how one of my favorite lessons so far from Flatiron is to treat error messages as hints, rather than as something to be upset about. There's another great piece of advice that we've been taught over and over again.

**Make it work, make it right, make it fast.**

Last Wednesday morning we had a quick assignment in which the goal was to parse the Reddit main page API, grab the top 20 stories, and export them into a local HTML file.

[My first attempt](https://gist.github.com/scottluptowski/f16e92448255961bc8bc "My first attempt") worked, but it was messy. I iterated through each post and added the output to one master string, which was then written to the local file. It was clearly time for some improvements. And one of the best things about Flatiron is how you're constantly pushed to do better work by your peers. What followed was some of my favorite code I've written all semester.

{% highlight ruby %}
require 'json'
require 'rest_client'
 
reddit_hash = JSON.parse(RestClient.get('http://reddit.com/.json'))
posts = reddit_hash["data"]["children"]
 
def template(post)
  upvotes = post["data"]["ups"]
  downvotes = post["data"]["downs"]
  permalink = "http://www.reddit.com" + post["data"]["permalink"]
  title = post["data"]["title"]
  thumbnail = post["data"]["thumbnail"]
 
  "<li><a href='#{permalink}'><h1>#{title}</h1><img src='#{thumbnail}'/><h4>Upvotes:</h4><p>#{upvotes}</p><h4>Downvotes:</h4><p>#{downvotes}</p></a></li>"
end
 
#run the template method on all posts
html_output = posts.map { |post| template(post)  }
 
#add necessary HTML for beginning and end of file
write_to_file = '<html><head></head><body><ul>' + html_output.join + "</ul></body></html>"
 
#write to file
output = File.open("reddit.html", "w")
output << write_to_file
output.close
{% endhighlight ruby %}

I'm proud of this code, but there's still further it can go. I'm consistently urged to "make it right" instead of settling for less than optimal code. [Here's what it looks like now](https://gist.github.com/scottluptowski/6884144 "OO Reddit Grabber"), but I'm sure I can find ways to improve this too!