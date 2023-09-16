"use strict";

let username = prompt("What is your name?");

console.log("User's name", username);

let startGame = prompt(
  "Hi " + username + "I'm Stacy and I have a few questions to ask you."
);

console.log("start Game", startGame);

let family = prompt("Do I have children?").toLowerCase();

if (family === "y" || family === "yes") {
  alert("Yes... I have 5 children!");
} else {
  alert(" I know it's hard to believe but I actually have 5 children.");
}

let location = prompt(
  "I live in land of crawfish boils, gumbo bowls, beignet grease and Mardi Gras... do I live in the South?"
);

if (location === "y" || location === "yes") {
  alert("Yes! I'm from New Orleans.");
} else {
  alert(
    "No! I'm from New Orleans...born and raised. You should definitely visit."
  );
}

let favPlace = prompt(
  "Do you think I've ever lived anywhere besides Louisiana?"
).toLocaleLowerCase();

if (favPlace === "y" || favPlace === "yes") {
  alert(
    "You're right! I have lived in Atlanta and New York but New Orleans will always be home to me."
  );
} else {
  alert(
    "Good guess... but I have have actually lived in Atlanta and New York!"
  );
}

let cooking = prompt("Do I like to cook?").toLowerCase();

if (cooking === "y" || cooking === "yes") {
  alert(
    "You are correct! I have been whipping up wonderful meals since the age of 9."
  );
} else {
  alert("No... I love to cook! Cooking is a must when you have 5 children.");
}

let favFood = prompt("Do I have a favorite food?").toLowerCase();

if (favFood === "y" || favFood === "yes") {
  alert(
    "I actually don't have a favorite, but my least favorite is mashed potatoes!"
  );
} else {
  alert(
    "I actually don't have a favorite, but my least favorite is mashed potatoes!"
  );
}

let endGame = prompt("Thank you " + username + "!" + "Welcome to my world!");

console.log("end Game", endGame);

