'use strict';
const fs = require('fs');
const path = require('path');
const mountPoint = '/mnt/sda1'; // the first flash drive plugged in
const filePath = path.join(mountPoint, 'testFile.txt');

const textToWrite = 'Hello Tessel Storage';

// write to storage
fs.writeFile(filePath, textToWrite, function() {
  console.log('Text file sent to ', filePath, 'on USB mass storage device.');
});

// read from storage
fs.readFile(filePath, function (err, data) {
  console.log('Read ', data.toString(), ' from USB mass storage device.');
});