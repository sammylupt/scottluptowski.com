---
layout: post
title: "Un-annoying form validation in AngularJS"
date:   2014-07-06 20:02:00
categories: posts
---

One of Angular’s best features is its out-of-the-box form validation. After Angualar reads the validation rules you apply to each form field, Angular *knows* if the field is valid or invalid at all times. Angular exposes the properties $valid, $invalid, $dirty, and $pristine on each form field. These properties are frequently referenced in the view to display error messages.

But this feature is a double-edged sword: Angular *always* knows if each form field is valid or not, and the validity of a field could change with every keystroke. If you conditionally display error messages in your view, like `ng-show="form.address.$invalid"`, those error messages could constantly appear and disappear as the user enters input.

This isn't the best user experience and it looks pretty messy. Where I work at Handybook, we want to display error messages at very particular timeframes: errors should only appear when the user tries to submit a form, and those errors should stay on the screen until the form is submitted again.

###Other options
I've seen a few blog posts about this topic, and many people recommend using a directive to track whether or not a form has been submitted yet. This is tracked by adding an `$attempted` flag to the form. It looks something like this: 

```javascript
/* <form my-submit="submitForm()"> */
.directive('mySubmit', function() {
  return {
    require: 'form',
    link: function(scope, elem, attrs, ctrl) {
      elem.on('click', function() {
        ctrl.$attempted = true;
        return ctrl.$valid
         ? scope.$apply(attrs.mySubmit)
         : false;
      });
    }
  }
})
```

This directive prevents the submission of an invalid form, and also sets a property called `$attempted` to true after the user clicks on submit.

For error handling display in views, this leads to logic like `ng-show="form.$attempted && form.address.$invalid"`. But this quickly gets ugly and verbose. Even worse, it doesn't solve the problem at hand: after a form submission attempt (that is, once `form.$attempted` is true), error messages can still appear and disappear as the user enters input that validates a field.

###The solution

We want to know *at the point of submission* whether or not something is valid. We want to store that value on each field until the next time the form is submitted. And we want to do this without polluting our view with crazy logic.

The solution to is to create a new property that is only assigned on form submission. When a form is submitted, the directive loops through each field and assigns the field a new property called `$invalidated`, equal to that field's current `$invalid` value. The directive also prevents the submission of invalid forms. Here's how it looks:

```javascript
/* <form hb-validate="submitForm()"> */
.directive('hbValidate', ['$parse', function($parse) {
  return {
    require: 'form',
    link: function(scope, elem, attrs, ctrl) {
      var fn = $parse(attributes.hbValidate);

      elem.on('submit', function(evt) {
        scope.$apply(function(){
          angular.forEach(ctrl, function(value, key) {
            if (value.hasOwnProperty('$invalid')) {
              value.$invalidated = value.$invalid;
            }
          });
        });

        if (ctrl.$invalid) return false;
        return scope.$apply(function(){
            fn(scope, $event: evt);
        });
      });
    }
  }
}])
```

In our views, the only property we reference is `$invalidated`, ie. `ng-show="form.address.$invalidated"`.

What I love about this approach is that it extends Angular's functionality rather than fighting it. This doesn't interfere with Angular determining whether or not something is invalid, but instead augments the functionality in a helpful way. This solution also gives us confidence because we know we're not tricking Angular's built-in validity checks. It cleans up our views tremendously and makes for a better user experience.

###Improvements

One thing I learned while writing this directive is that it is surprisingly hard to get a list of a given form's input fields. Because each form is an Angular instance of `FormController`, I checked the source for that file. What I found is that Angular interally maintains a list of a form's fields as the variable `controls` in a FormController. Angular stores `controls` in a closure that we cannot access. 

The easiest way I found to find a list of all form fields is to loop through  the form's values and search for those which have the property `$invalid`. (You could also use $valid, $pristine, or $dirty. Each field has these properties at all times). I wish Angular gave us access to `controls` instead.

Handybook plans to open source a more full-featured version of the above directive, with support for disabling the form during the submission and dynamically swapping out the submit button's content with a spinner gif or loading message.