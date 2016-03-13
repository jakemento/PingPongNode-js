var pingPong = require('./pingpong.js').pingPong;

var goal = prompt("what number do you wanna ping pong up to?");
var result = pingPong(goal);

result.forEach(function(element){
  console.log(element);
});
