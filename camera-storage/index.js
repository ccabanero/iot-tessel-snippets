'use strict';
const av = require('tessel-av');
const fs = require('fs');
const path = require('path');

// turn on camera
const camera = new av.Camera();
camera.on('frame', function(data) {

    // name the image data
    const imageName = String(Date.now()) + 'image.jpg';
    console.log('adding jpg to usb storage: ', imageName);

    // save as as jpg image in USB Flash storage
    const mountPoint = '/mnt/sda1';
    const filepath = path.join(mountPoint, imageName);
    fs.writeFile(filepath, data);
});