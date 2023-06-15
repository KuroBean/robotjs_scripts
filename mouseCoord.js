const robot = require('robotjs');
var coord=robot.getMousePos();
setInterval(function(){console.log(coord.x+", "+coord.y);
coord=robot.getMousePos();

},1000);
