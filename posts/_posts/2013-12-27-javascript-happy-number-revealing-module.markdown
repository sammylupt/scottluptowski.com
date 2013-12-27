---
layout: post
title:  "Building a JavaScript Happy Number Finder with the Revealing Module Pattern" 
date:   2013-12-27 10:00:00
categories: posts
---

One of my favorite problems in Ruby is figuring out if a number is 'happy.' It's a fun problem that involves recursion, converting objects between classes, and a few other tricks. 

What does a Happy Number even mean? Let's consult Wikipedia: "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1." Thus a happy number eventually leads to 1, and an unhappy number leads to an endless loop or stack overflow.

Yesterday I sat down and decided to solve the problem in JavaScript. My main question to myself was how I should organize the code, and more specifically if I should use the Constructor / Prototype pattern or the Revealing Module pattern.

###Choosing a pattern

My first thought was to model this problem using the Contructor or Constructor / Prototype pattern. In this example, I'd create a new function and use it to construct new objects by passing in a number. Imagine:

```javascript
function HappyNumberFinder(num) {
  this.num = num;
  this.check = function() {
  }
}

var seven = new HappyNumberFinder(7);
```
What I liked about this approach was that each use the HNF would live inside its own object. However, this pattern suffers from two problems:

When you create new objects using a constructor function, each value you attach to ```this```, such as ```this.num``` and ```this.check```, is copied locally to that object. This works great for things like ```this.num``` but bad for things like ```this.check```, which would be needlessly duplicated each time.

As I compromise, I could have stored the number inside the object and attached the functions to the HNF's prototype. That would have worked fine, but it seemed wrong: the implementation of the HappyNumberFinder relies on many helper functions, and they should not be publicly accessible from the object's prototype.

Given the task at hand, it was clear to me that the Revealing Module Pattern was the best solution for this problem. Let's take a step back and examine the Revealing Module Pattern in detail.

###The Revealing Module Pattern
The general idea behind this pattern is to approximate the idea of private and public functions by hiding private functions inside a closure and returning only the public functionality you wish to expose.

Another benefit is that you can self-document a module's dependencies by creating the module with those dependencies and locally alias them if you choose to do so.

Here's the basic idea:

```javascript
var _ = require('underscore');
var HappyNumberFinder = (function(_){
	var privateMessage = "Checking if your number is happy: ";
	
	function privateWorker(num) {
		console.log(privateMessage + num);
	}
	
	function publicWorker(num) {
		privateWorker(num);
	}
	
	return {
		check: publicWorker
	}
}(_));

HappyNumberFinder.check(7);

```

The result of this code is an object with one publicly available method called check. ```HappyNumberFinder.check(n)``` is an alias to the function publicWorker, which itself calls the privateWorker function that is kept alive through closure. Because underscore is a global variable I did not need to pass it into the function, but by doing so I document the dependencies of my module.

###Building the finder
Solving the HNF problem involves a number of steps. I'll take us through one iteration of the function with the (happy) number of 49.

The first step is to take the number 49 and split it into the numbers 4 and 9. This is a very simple function: turn the number into a string, split it, and turn each character back into a number:

```javascript
function splitNumberIntoPieces(number) {
  var numberStringArray = number.toString().split('');
  return _.map(numberStringArray, function(n) { return parseInt(n); });
}
```

Given our previous result — the array [4,9] — our next step is to square each number in the array, add up the squared values, and return that number. This function is solved simply with Underscore's ```chain()``` method, which lets you chain as many Underscore methods as you want together and then retrieve the result with ```.value()```.

```javascript
function squareArrayAndSum(number_array) {
  var squaredSums = _.chain(number_array)
  .map(function(n) { return n * n; })
  .inject(function(total_sum, eachNum) {
    return total_sum += eachNum;
  }, 0)
  .value();

  return squaredSums;
}
```

Because I can't help myself, here's that same method in Ruby: 
```squared_sum = number_array.map{|n| n * n}.inject(&:+)```.
 Easier on the eyes, I'd say.

  
Finally, we check the result of this squared array (130). Does it equal 1? If so, the number is happy and we are done. If not, we log the number and recursively call the same function until the problem is solved or we determine the number is happy.


###The Result

You can take a look at my code [here](https://gist.github.com/scottluptowski/8139578 "here") and run it from your command line with Node.

Some elements of the constructor pattern make sense: namely that each time the HNF function is run, we have a resulting object. But the constructor / prototype pattern suffers from a bigger flaw: there is no need for helper / implementation functions to be publicly available, as they would be if they were attached to the HNF's prototype.

I believe the Revealing Module pattern was the perfect solution for this problem. It provides structure for the helper functions while only exposing publicly the one method necessary to determine if a number is happy.

I'm very interested in hearing how I could improve this module more. Feel free to let me know on [Twitter](http://www.twitter.com/scottluptowski "My twitter profile").
