---
layout: post
title:  "Testing with Rspec, or Errors as Hints" 
date:   2013-10-07 18:46:57
categories: posts
---

Until recently, I never liked receiving errors in Ruby. Compared with other programming languages, in which an error typically means that things simply don't work correctly, Ruby seems to go out of its way to bark at the programmer.

Even the slightest error in an IRB session and Ruby will error out with three or four lines pointing out your mistake, which often seems excessive. _"It's just one missing period or paranthesis, why do you need to yell at me?"_

I'm now two weeks into the Flatiron School, and one of my favorite lessons so far is that **errors are hints**. Sometimes it may feel like Ruby is overcommunicating with you, but the truth is that Ruby is telling you _exactly what you need to do to fix the issue_.

This lesson is paying dividends now that we're adopting an Rspec heavy TDD approach at the Flatiron School. In fact, the first time you run a test suite and see all of the tests fail, you're seeing more than errors. In a sense you are seeing the solutions for each of the tests you must answer.

I've been reading as much as I can about Rspec in order to wrap my head around its best practices. A great guide to the basics is one I found on Speakerdeck, [TDD Fundamentals](https://speakerdeck.com/sebasoga/tdd-fundamentals "TDD Fundamentals") by Sebastian Sogamoso.

Sebastian describes the basic pattern of TDD: Watch it fail, make it pass, improve it. Or, put more elegantly: "Red, Green, Refactor."  The TDD approach has a lot in common with another lesson we've heard from day one at Flatiron: "Make it work, make it right, make it fast." It is impossible to refactor code which does not work, so our first step must be to make code run. I'm excited to keep learning more about Rspec, and would also recommend [Better Specs](http://betterspecs.org/ "Better Specs") as a more advanced resource.