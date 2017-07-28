const tessel = require('tessel');
const ambientlib = require('ambient-attx4');
const ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function(){
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
