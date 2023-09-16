"use strict";

let username = prompt("Hello, what is your name?");
alert("Hi " + username + ", welcome to my page!");

console.log(username + alert);

alert("Ok " + username + ", I'm Stacy and I have a few questions to ask you.");

console.log("welcome" + prompt);

let game = prompt("Are you ready to play a little guessing game?");
console.log(game + "," + alert + "I'm so happy that you are!");

if (game==="y" || game === "yes") {
  alert("Great... I'm so happy that you are!");
} else {alert("I'm sorry to hear that... but you should try anyway!");
}

let family = prompt("Do I have children?").toLowerCase();
console.log(family + alert);

if (family === "y" || family === "yes") {
  alert("Yes... I have 5 children!");
} else {
  alert(" I know it's hard to believe but I actually have 5 children.");
}

let home = prompt(
  "I live in land of crawfish boils, gumbo bowls, beignet grease and Mardi Gras... do I live in the South?"
);
console.log(home + alert);

if (home === "y" || home === "yes") {
  alert("Yes! I'm from New Orleans.");
} else {
  alert(
    "No! I'm from New Orleans...born and raised. You should definitely visit."
  );
}

let place = prompt(
  "Do you think I've ever lived anywhere besides Louisiana?"
).toLocaleLowerCase();

console.log( "pLace" + alert);

if (place === "y" || place === "yes") {
  alert(
    "You're correct! I have lived in Atlanta and New York but New Orleans will always be home to me.");
} else {
  alert(
    "Good guess... but I have have actually lived in Atlanta and New York!"
  );
}

let cooking = prompt("Do I like to cook?").toLowerCase();
console.log(cooking + prompt);

if (cooking === "y" || cooking === "yes") {
  alert(
    "You are correct! I have been whipping up wonderful meals since the age of 9."
  );
} else {
  alert("No... I love to cook! Cooking is a must when you have 5 children.");
}

alert("Thanks for playing " + username + ", I'm glad you know a little more about me now!");

