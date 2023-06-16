const robot = require('robotjs');
//when chat gpt window expanded right when width changes (to the wider one, when window abt half of screen)

robot.setMouseDelay(500);
var inputCoord = [1700, 1300];
var sendBtn = [2372, 1311];
var newchat = [1290, 150];
var latestChat = [1350, 243];
//USE TAMPERMONKEY SCRIPT SO CTRL KEY = SAVE LATEST RESPONSE, OTHER KEY = PASTE RESPONSE
setUpChat();
makeNewChat();//NEED PARENTHESIS FOR COMMAND TO REGISTER IG
askOtherChatResponse();
goToNthChat(2);
askOtherChatResponse();
while (true){
    goToLatestChat();
    askOtherChatResponse();
    goToNthChat(2);
    askOtherChatResponse();
}

function setUpChat(){
    robot.moveMouse(inputCoord[0], inputCoord[1]);
    robot.mouseClick("right");
    keyLongTap("control");
    robot.mouseClick("right");

    keyLongTap("space");
    keyLongTap("backspace");
    robot.moveMouse(sendBtn[0], sendBtn[1]);
    robot.mouseToggle("down","right");
    //CLICK DOESNT WORK WITH SEND BUTTON, BUT
    //IF YOU DO THIS AND HOLD IT DOWN LONGER IT SOMEHOW WORKS
    pause(1000);
    robot.mouseToggle("up", "right");
    console.log("clicked");
    pause(15000);
    keyLongTap("shift");
}

function askOtherChatResponse(){
    keyLongTap("alt");
    robot.moveMouse(inputCoord[0], inputCoord[1]);
    robot.mouseClick("right");
    keyLongTap("space");
    keyLongTap("backspace");
    robot.moveMouse(sendBtn[0], sendBtn[1]);
    robot.mouseToggle("down","right");
    //CLICK DOESNT WORK WITH SEND BUTTON, BUT
    //IF YOU DO THIS AND HOLD IT DOWN LONGER IT SOMEHOW WORKS
    pause(1000);
    robot.mouseToggle("up", "right");
    console.log("clicked");
    pause(15000);
    keyLongTap("shift");
}

function keyLongTap(key){
    robot.keyToggle(key,"down");
    pause(500);
    robot.keyToggle(key,"up");
}

function pause(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}
function askChatGpt(question) {
    robot.moveMouse(inputCoord[0], inputCoord[1]);
    robot.mouseClick("right");
    robot.typeString(question );
    robot.moveMouse(sendBtn[0], sendBtn[1]);
    robot.mouseToggle("down","right");
    //CLICK DOESNT WORK WITH SEND BUTTON, BUT
    //IF YOU DO THIS AND HOLD IT DOWN LONGER IT SOMEHOW WORKS
    pause(1000);
    robot.mouseToggle("up", "right");
    console.log("clicked"); 
    
} 
function makeNewChat(){
    console.log("making new chat");
    robot.moveMouse(newchat[0],newchat[1]);
    robot.mouseClick("right");
    pause(2000);
}
function goToLatestChat(){
    robot.moveMouse(latestChat[0],latestChat[1]);
    robot.mouseClick("right");
    pause(2000);
}
function goToNthChat(n){//only for chats made that day
    robot.moveMouse(latestChat[0],latestChat[1]+((n-1)*50));
    robot.mouseClick("right");
    pause(2000);
}