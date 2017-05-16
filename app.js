'use strict';

var user = prompt('What\'s your name kid?');
console.log('user:' + user);

alert('Well well well, ' + user + '. You look like a pretty rad dude. I have some questions for you. Based on your responses, I may let you join my crew. We\'re a rowdy bunch of space pirates who sail throughout the galaxy. And lucky for you, we\'re hiring. Answer my questions with a Y or N.');

var answer0 = prompt(user + ', Have you ever heard The legend of Robin Hood? Y/N');
answer0 = answer0.toLowerCase();
console.log('users answer:' + answer0);

if (answer0 === 'N' || answer0 === 'no' || answer0 === 'n' || answer0 === 'NO')
  alert('Have you been living under a rock??');

var answer = prompt(user + ', Do you think stealing is wrong?');
answer = answer.toLowerCase();
console.log('users answer:' + answer);

if (answer === 'Y' || answer === 'yes' || answer === 'y' || answer === 'YES') {
  alert('That\'s too bad, I would\'ve atleast made you a Deckhand. What if you were stealing from the undeserving ultra-rich Ganymede rock lobster farmers? Those Rock Lobsters are endangered, ya know.');
}

var answer1 = prompt('Let me ask you a better question\: ' + user + ', are you an adventure seeker?');
answer1 = answer1.toLowerCase();
console.log('answer1:', answer1);

if (answer1 === 'N' || answer1 === 'no' || answer1 === 'N' || answer1 === 'NO') {
  alert('Oh c\'mon, your no fun.. Be gone with you.');
}

var answer2 = prompt('You\'re a feisty one. ' + user + ' do you like drugs? Y/N');
answer2 = answer2.toLowerCase();
console.log('answer2:', answer2);

var answer4 = prompt('Nevermind that last question..Do you like to travel? Y/N');
if (answer4 === 'N') {
  alert('Oh c\'mon, what do you do for fun?? Code?');
} else {
  alert('Well I\'ve got the perfect job for you ' + user + ', you get to be our new poopdeck scrubber. Benefits included.');
}
