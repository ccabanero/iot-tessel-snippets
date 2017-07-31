const path = require('path');
const av = require('tessel-av');

const mp3File = path.join(__dirname, 'mp3/notification.mp3');
const sound = new av.Player(mp3File);
sound.play(mp3File);