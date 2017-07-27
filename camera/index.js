const av = require('tessel-av');
const os = require('os');
const http = require('http');
const port = 8000;
const camera = new av.Camera();

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/jpg' });
    camera.capture().pipe(response);
}).listen(port, () => console.log(`View captured photo at: http://${os.hostname()}.local:${port}`));