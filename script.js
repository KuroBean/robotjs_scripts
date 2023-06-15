const robot = require('robotjs');
//when chat gpt window expanded right when width changes (to the wider one, when window abt half of screen)

robot.setMouseDelay(1000);
var inputCoord = [1600, 1300];
var sendBtn = [2300, 1300];
var newchat = [1250, 150];
var latestChat = [1277, 236];

askChatGpt("shorter");
makeNewChat;
/** 
askChatGpt("respond only within 3 lines as shown in this website");
goToLatestChayt;
*/
/** 
robot.moveMouse(newchat[0],newchat[1]);
robot.mouseClick;

robot.moveMouse(inputCoord[0],inputCoord[1]);
robot.mouseClick();
// Type "beans"
robot.typeStringDelayed("write me a motivational speech",180);

robot.moveMouse(sendBtn[0],sendBtn[1]);
robot.mouseClick;
*/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function askChatGpt(question,) {
    robot.moveMouse(inputCoord[0], inputCoord[1]);
    robot.mouseClick("right");
    robot.typeString(question );
    robot.moveMouse(sendBtn[0], sendBtn[1]);
    robot.mouseToggle("down","right");
    //CLICK DOESNT WORK WITH SEND BUTTON, BUT
    //IF YOU DO THIS AND HOLD IT DOWN LONGER IT SOMEHOW WORKS
    await delay(2000);
    robot.mouseToggle("up", "right");
    console.log("clicked"); 
        
} 
function makeNewChat(){
    robot.moveMouse(newchat[0],newchat[1]);
    robot.mouseClick("right");
}
function goToLatestChat(){
    robot.moveMouse(latestChat[0],latestChat[1]);
    robot.mouseClick("right");
}