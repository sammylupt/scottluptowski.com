---
layout: post
title:  "Recreating Ruby Iterator Methods with While and Yield" 
date:   2013-12-01 14:24:00
categories: posts
---

Ruby provides programmers with many different iterator methods, which at first glance may feel overwhelming or counter-intuitive. What is the difference between all of them, and which should we use in certain circumstances? Does it even make a difference?

During a lecture early in the semester at Flatiron, Avi quickly used ```while``` and ```yield``` to demonstrate simplified versions of iterators like ```#each```, ```#map```, ```#select```, and ```#reject```, and to show how similar the methods are to each other.

Ruby is written in C, but that's not the point; this exercise helps solidify the difference between the iterators and help you figure out which to use in a given situation. Now that we've been learning Rails for a while, I wanted to revisit this exercise and code these methods from memory.

Two caveats:

1. Many of these methods are included in Ruby's enumerable module, which means they are availale to other classes besides ```Array```. I'm using only arrays for simplicity's sake.

2. My methods are meant for demonstrative purposes, and there is no effort to optimize them for speed. Clarity wins here.

###Each 
```ruby
class Array
  def my_each
  	i = 0
  	while self[i]
  	  yield self[i]
  	  i += 1
  	end
  	self
  end
 end
```

The simplest method, ```#my_each```, serves as a blueprint for each of the other iterators. Using the variable ```i```, ```#my_each``` iterates over each element in the array, passing successive values to the block and incrementing ```i``` until the while loop returns false. No matter what is passed into ```#each```, it always returns ```self```.

###Each with index

With the previous method as a base, ```#each_with_index``` is trivial to implement. The only difference between the methods is that ```#each_with_index``` keeps track of the index of the array elements. To accomplish this, simply give two parameters to yield, and they will be passed to the block: ```yield self[i], i```. 

```ruby
[2].my_each_with_index { |value, index| "#{value} is at index #{index}" }
#=> "2 is at index 0"
```

###Map/collect
I suspect that ```#map``` is the second most common iterator after ```#each```. The difference between ```#map``` and ```#each``` is that while ```#each``` returns ```self```, ```#map``` returns a new array containing the results of running the block on each element in ```self```.

```ruby
class Array
  def my_map
    result = []
    i = 0
    while self[i]
      result << (yield self[i])
      i += 1
    end
    result
  end
end
```

The differences between ```#each``` and ```#map``` are clear:

```ruby
[1,2,3].my_each{|n| n * n } #=> [1,2,3]
[1,2,3].my_map{|n| n * n } #=> [1,4,9]
```

###Select and Reject

Let's move on to two very similiar examples: ```#select``` and ```#reject```. Like ```#map```, both methods build up a result set and return a new array. The difference is in the number of elements returned in the new array.


```ruby
class Array
  def my_select
    result = []
    i = 0
    while self[i]
      result << self[i] if (yield(self[i]))
      i += 1
    end
    result
  end
end
```

```#Select``` iterates over each value of the array, and checks if the condition in the block is true for the value. If it is true, the value is pushed into the new array. (```#Reject``` does the same, but checks if it is false.) To turn ```#select``` into ```#reject```, just use a bang: ```result << self[i] if !(yield(self[i]))```.

```#Select``` and ```#Reject``` always returns an array, even if there are no matches for the block. This means that these methods must explicity return the result array, or else the return value would be nil.

```ruby
[1,2,3].my_select {|n| n > 1 } #=> [1,2]
[1,2,3].my_reject {|n| n < 2 } #=> [2,3]
[1,2,3].my_select {|n| n > 5 } #=> []
```

###Detect

Finally I'd like to re-create ```#detect```, which is a method that iterates over an array and returns the first value for which the block is true. This method is similiar to ```#select```, except that in the case of no results it returns nil, rather than a blank array.

After building ```#select```, ```#detect``` is trivial to implement:

```ruby
class Array
  def my_detect
    i = 0
    while self[i]
      return self[i] if (yield self[i])
      i += 1
    end
  end
end
```

###In conclusion
I hope this post, while overly-simplified, illustrates some of the differences between Ruby's iterators. The next time you find yourself reaching for ```#each```, consider that there are likely more appropriate iterators for your problem. Using an alternative iterator also makes your code more readable by more clearly demonstrating your intentions.