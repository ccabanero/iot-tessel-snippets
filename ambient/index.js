// Import the interface to Tessel hardware
var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function(){

  // get light and sound levels
  setInterval(function(){
    ambient.getLightLevel(function(err, lightdata){
      if (err) throw err;
      ambient.getSoundLevel(function(err, sounddata) {
        if (err)throw err;
        console.log("Light level:", lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));
      });
    });
  }, 500);
});

ambient.on('error', function(err){
  console.log(err);
});
