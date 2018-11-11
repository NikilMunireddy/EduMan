var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const API_KEY='2RL2J2-LKH6J4XG9P'

const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI(API_KEY);
var cont;

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log('Query: ' + msg);
    var mssg=msg;
   
    waApi.getFull(mssg).then((queryresult) => {
      const pods = queryresult.pods;
      const output = pods.map((pod) => {
        const subpodContent = pod.subpods.map(subpod =>
          `${subpod.img.src}`,
        ).join("\n");
        socket.emit('subpod',subpodContent)
        return `${subpodContent}`;
      }).join("\n");
      console.log(output);
      
    }).catch(console.error);


  });
});


http.listen(5000, () => {
  console.log('listening on port:5000')
});
