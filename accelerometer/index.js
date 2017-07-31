'use strict';
const tessel = require('tessel');
const accel = require('accel-mma84').use(tessel.port['A']);
const fs = require('fs');
const path = require('path');

const mountPoint = '/mnt/sda1';
const filepath = path.join(mountPoint, 'accelerometer.txt');

accel.on('ready', function () {
  accel.on('data', function (xyz) {
    const accelerometerReading = 'x:' + xyz[0].toFixed(2) + 'y:' + xyz[1].toFixed(2) + 'z:' + xyz[2].toFixed(2);
    fs.appendFile(filepath, accelerometerReading, function() {
        console.log(accelerometerReading);
    });
  }); 
});

accel.on('error', function(err){
  console.log('Error:', err);
});
