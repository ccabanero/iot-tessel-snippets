// for ambient sensor
const tessel = require('tessel');
const ambientlib = require('ambient-attx4');
const ambient = ambientlib.use(tessel.port['A']);
// for camera
const av = require('tessel-av');
const os = require('os');
const http = require('http');
const port = 8000;
const camera = new av.Camera();

ambient.on('ready', function() {
    var refreshId = setInterval(function() {
      ambient.getSoundLevel(function(err, soundData) {
        if (err) throw err;
        console.log('sound data is: ', soundData);
        if (soundIsAboveThreshold(soundData)) {
          clearInterval(refreshId);
          turnOnCamera();
        }
      });
    }, 200);
});

/**
 * Error handler for Ambient sensor
 */
ambient.on('error', function(err){
  console.log(err);
});

/**
 * Utility to evaluate if the ambient sensor data has past a target threshold
 * @param soundData
 * @returns {boolean}
 */
function soundIsAboveThreshold(soundData) {
  const targetSoundThreshold = 0.02;
  return (soundData > targetSoundThreshold);
}

/**
 * For turning on the camera and presenting URL for viewing photo capture
 */
function turnOnCamera() {
  http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/jpg' });
    camera.capture().pipe(response);
  }).listen(port, () => console.log(`View camera at: http://${os.hostname()}.local:${port}`));
}
