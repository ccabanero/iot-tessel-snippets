'use strict';
const tessel = require('tessel');
const gpsLib = require('gps-a2235h');
const fs = require('fs');
const path = require('path');

const mountPoint = '/mnt/sda1';
const filepath = path.join(mountPoint, 'gps.txt');

const gps = gpsLib.use(tessel.port['A']);

gps.on('ready', function(){

  const readyStatusText = 'GPS module powered and ready. waiting for satellites...';
  fs.writeFile(filepath, readyStatusText, function() {
      console.log(readyStatusText);
  });

  gps.on('coordinates', function(coords){
      const coordinateText = 'Latitude: ' + coords.lat + ' Longitude: ' + coords.lon;
    fs.writeFile(filepath, coordinateText, function() {
        console.log('added to text file: ',  coordinateText);
    })
  });

  gps.on('altitude', function (alt) {
      const altitudeText = 'Altidue: ' + alt.alt + ' meters';
    fs.writeFile(filepath, altitudeText, function() {
        console.log('added to text file: ', altitudeText);
    });
  });

  gps.on('fix', function (data) {
    let fixTest = 'Number of satellites fixed: ' + data.numSat;
    fs.writeFile(filepath, fixTest, function() {
        console.log('added to text file: ', fixTest);
    });
  });

  gps.on('dropped', function(){
    const dropText = 'GPS signal dropped';
    fs.writeFile(filepath, dropText, function() {
        console.log('added to text file: ', dropText);
    });
  });

});

gps.on('error', function(err) {
  const errorText = 'error with gps-storage: ' + err;
  console.log(errorText);
});
