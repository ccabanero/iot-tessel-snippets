'use strict';
const os = require('os');
const av = require('tessel-av');
var espeak = require('espeak');


const speaker = new av.Speaker();

speaker.say('hello');

speaker.say({
    phrase: 'test test does this work',
    s: 100
});

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
/*
speaker.say(`
  Hello, this is ${os.hostname()}. 
  I'm going to say my A-B-C's now
`);

alphabet.forEach(letter => speaker.say(letter));

speaker.on('lastword', function() {
    // If this had been an `empty` event, it would've
    // been emitted again as soon as the next phrase
    // was spoken.
    this.say('And now I know my A-B-Cs');
});
*/