// Simple Javascript one-liners (note: some have been prettified)

// 1. Reverse a String
const reverseString = (str) => str.split("").reverse().join("");
reverseString("Hello World"); // -> dlroW olleH

// 2. Reverse an Array
const reverseArray = (arr) => arr.reverse();
reverseArray([ 34, 234, 567, 4 ]); // -> [ 4, 567, 234, 34 ]

// 3. Average of Array of Numbers
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
average([ 5, 10, 15, 20 ]); // -> 12.5

// 4. Array of Past Seven Days
const pastWeek = [ ...Array(7).keys() ].map(
	(days) => new Date(Date.now() - 86400000 * days)
);
console.log(pastWeek); // -> Array(7) [ Date Jun 12, Jun 11, Jun 10, ... ]

// 5. Capitalize a String
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
capitalize("javascript one-liners are fun."); // -> Javascript one-liners are fun.

// 6. Remove Duplicates in Array
const removeDuplicates = (arr) => [ ...new Set(arr) ];
removeDuplicates([ 31, 56, 12, 31, 45, 12, 31 ]); // -> [ 31, 56, 12, 45 ]

// 7. Generate a Random ID
const randomID = Math.random().toString(36).substring(2);
console.log(randomID); // -> "e2zpbxruvop"

// 8. Toggle Display of an Element
const toggle = (element) =>
	(element.style.display =
		element.style.display === "none" ? "block" : "none");

// 9. Generate a Random Hex Color
const hexColor = () =>
	"#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");

// 10. Scroll to Top of Page
const toTop = () => window.scrollTo(0, 0);

// 11. Get the Number of Days Between Two Days
const dayDif = (date1, date2) =>
	Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDif(new Date("2020-09-23"), new Date("2020-10-01")); // -> 8

// 12. Clear All Cookies
const clearCookies = document.cookie
	.split(";")
	.forEach(
		(cookie) =>
			(document.cookie = cookie
				.replace(/^ +/, "")
				.replace(
					/=.*/,
					`=;expires=${new Date(0).toUTCString()};path=/`
				))
	);

// 13. Detect Dark Mode
const isDarkMode =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;
