var pingPong = require('./pingpong.js').pingPong;


console.log("ping-ponging up to 100!");
var result = pingPong(100);

result.forEach(function(element){
  console.log(element);
});
