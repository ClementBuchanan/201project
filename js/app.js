'use strict'

var userName = prompt('What is your name?');
alert('Hello ' + userName);

// Question One
let bio = prompt('Please answer yes/no or y/n to my questions. Have you read my bio?');
bio.toLowerCase;
if ((bio === 'yes') || (bio === 'y')){
  alert('That\'s Greeeaaaat! Now answer the next question.');
} else {
  alert('Wrong answer');
}

// Question two
let city = prompt('Did I grow up in Brooklyn, NY?');
city.toLowerCase;
if ((city === 'yes') || (city === 'y')){
  alert('That\'s correct ' + userName + '. Thank you for knowing this. Move on to the next question.');
} else {
alert('Wrong answer');
}

// Question three
let vet = prompt('Am I a veteran ' + userName + '?');
vet.toLowerCase;
if ((vet === 'yes') || (vet === 'y')){
  alert('That\'s correct ' + userName + ' you do know more things about me. Move on to the next question.');
} else {
alert('Wrong answer');
}

// Question four
let work = prompt('Do I work in public health ' + userName + '?');
work.toLowerCase;
if ((work === 'yes') || (work === 'y')){  
  alert('That\'s correct ' + userName + ' you really know a lot about me. Move on to the next question.');
} else {
  alert('Wrong answer');
}

// Question five
let future = prompt('Alright then ' + userName  + ' would you believe me if I told you I\'m from the future?');
future.toLowerCase;
if ((future === 'yes') || (future === 'y')){  
  alert('Yowza ' + userName + ' you really are smart.');
} else {
  alert('Wrong answer');
}
alert('Thank you for playing this game ' + userName + '. You\'ve been a good sport.');