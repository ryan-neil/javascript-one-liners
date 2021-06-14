# JavaScript One Liners
<!-- <img src="" width="800" alt=""> -->

## 👆🏻 Summary
This is a repo to display simple JavaScript code for some common use cases and problems we encounter in web development. I understand some of these examples may be over simplified so because of this the `README` file will contain explanations for each of the snippets and what is happening behind the scenes.

The inspiration for this repo came from [this](https://livecodestream.dev/post/awesome-javascript-one-liners-to-look-like-a-pro/) article by _Anjalee Sudasinghe_.

### Table of Contents
  1. [Reverse a String](#reverse-a-string)
  1. [Average of Array of Numbers](#average-of-array-of-numbers)
  1. [Array of Past Seven Days](#array-of-past-seven-days)
  1. [Capitalize a String](#capitalize-a-string)
  1. [Remove Duplicates in Array](#remove-duplicates-in-array)
  1. [Generate a Random ID](#generate-a-random-id)
  1. [Toggle Display of an Element](#toggle-display-of-an-element)
  1. [Generate a Random Hex Color](#generate-a-random-hex-color)
  1. [Scroll to Top of Page](#scroll-to-top-of-page)
  1. [Clear All Cookies](#clear-all-cookies)
  1. [Detect Dark Mode](#detect-dark-mode)

----

### Reverse a String
We're able to reverse a string using only one line with the `split`, `join`, and `reverse` methods.

```js
const reverseString = (str) => str.split("").reverse().join("");

reverseString("Hello World");
// -> dlroW olleH
```

__Summary:__

In the above code snippet, we're passing a string to the `reverseString` function as a parameter. We then split the string with `.split()` method which gives us an ordered list of substrings, puts these substrings into an array, and returns the array. We pass in an empty string (`""`) to `.split()` because we want the string to be split up by this type of separator string.
```js
console.log("Hello World".split(""));
// -> [ "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d" ]
```
Next, we tack on the `.reverse()` method to `.split("")` which reverses the array in place. The first array element becomes the last, and the last array element becomes the first. So we should get something like this:
```js
console.log("Hello World".split("").reverse());
// -> [ "d", "l", "r", "o", "W", " ", "o", "l", "l", "e", "H" ]
```
Lastly, we join each string of letters together with `.join()`. The `join()` method creates and returns a new string by concatenating all of the elements in the array, separated by commas or a specified separator string. We're passing in an empty string (`""`) because we're telling `join()` to concatenate everything enclosed in `""`.
```js
console.log("Hello World".split("").reverse().join(""));
// -> dlroW olleH
```

### Average of Array of Numbers
Javascript reducer allows calculating the average of a number of arrays in a single line. The `.reduce` method is quite useful when writing one-line solutions to a number of problems like finding the sum or maximum in an array of numbers.

```js
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;

average([ 5, 10, 15, 20 ]);
// -> 12.5
```

__Summary:__

Here's the math what's actually being done in the above example. Hopefully this gives a better understanding of how `reduce()` works under the hood.
```js
[(5) + (10)] = 15, [15 + (15)] = 30, [30 + (20)] = 50 / [4] = 12.5
```
So, `5` is passed into the `a` parameter of `reduce()` and `10` is passed into `b`. We then run through our logic which is simply, `a + b`. So `5` gets added to `10` because those are the first two numbers of our array we pass to `average()` and we get `15`. 

`15` is then passed into `a` which we will add to `b` which is now `15` (our third number in the array) and we get `30`. `30` (being passed into `a`) is then added to our last number of the array, `20` (being passed into `b`) and we get `50`. The last thing we do is divide `50` by the length of our array which is `4`.


### Array of Past Seven Days
Here's what you would do if you want to get an array of the past 7 days (including today) in your application.

```js
const pastWeek = [ ...Array(7).keys() ].map((days) => new Date(Date.now() - 86400000 * days));

console.log(pastWeek);
// -> Array(7) [ Date Jun 12, Jun 11, Jun 10, ... ]
```
> Note: 86400000 is one day in milliseconds

__Summary:__

We can easily get the next seven days by changing the minus sign (`-`) to addition (`+`).

### Capitalize a String
JavaScript does not provide us with a built-in capitalize method but we can easily accomplish this with this simple one line code:

```js
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize("javascript one-liners are fun."));
// -> Javascript one-liners are fun.
```

__Summary:__

  * The first thing we're doing is getting the character at index [0] with `charAt(0)` which gives us, `j`. 
  * Then we're setting that character to uppercase with the `toUpperCase()` method. 
  * Last, we slice our string at index [1] which gives us `"avascript one-liners are fun."` and we concatenate that with our newly capitalized `J`.

### Remove Duplicates in Array
We know that sets in Javascript only store unique items. We can use this behavior to our advantage to remove duplicate items in an array. However, it only works with arrays storing primitive data. 

So you’d have to write a multiline solution to remove duplicates in arrays storing objects. But, still, it’s a quite decent method to remove duplicates in simple scenarios.

```js
const removeDuplicates = (arr) => [...new Set(arr)]

removeDuplicates([31, 56, 12, 31, 45, 12, 31])
// -> [ 31, 56, 12, 45 ]
```

### Generate a Random ID
This simple function generates a random ID using Math.random(). Since Math.random() doesn’t guarantee that all the generated numbers are unique, this method is not 100% secure to use in production. But there’s no harm in using it during development to quickly get an ID to complete the implementation and test the app.

```js
const randomID = Math.random().toString(36).substring(2)
```

### Toggle Display of an Element
You can easily toggle between hiding and displaying an element with the single line method.

```js
const toggle = element => element.style.display = (element.style.display === "none" ? "block" : "none")
```

### Generate a Random Hex Color
This method generates a random hex code using Math.random() and padEnd(). Use this whenever you want to display a random color in your program.

```js
const hexColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')
```

### Scroll to Top of Page
You can scroll to the top of the page in Javascript using scrollTo() method. It accepts the X and Y coordinates of the position Javascript should scroll to. 

So when we pass zero to X and Y, it scrolls to the top of the page.

```js
const toTop = () => window.scrollTo(0, 0)
```

### Get the Number of Days Between Two Days
In this single-line implementation, you should convert the two days into time-based representation and then find their difference. You can then divide it by the number of milliseconds in a day to get the number of days.

```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date("2020-09-23"), new Date("2020-10-01"))
// -> 8
```

### Clear All Cookies
You can clear all the cookies stored by the application by setting their expiry date to a date that has already passed. So if you set the expiry date to the first date in the Javascript time system, the system automatically expires the cookie. And you can clear the data stored in cookies along with the previous step.

```js
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

### Detect Dark Mode
This is a great one! If we want to detect whether the user has enabled dark mode in their browser, use this one-line solution. I personally use this one in my personal [website](www.josephskycrest.com).

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
```
This line of code will return a `true` or `false`.