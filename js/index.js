document.getElementById("maintitle").innerText = "point and click adventures";
const offsetCharacter = 7;
const gamewindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const diedspeech = document.getElementById("diedspeech");

const sec = 1000;

const grass1 = document.getElementById("grass1");

const characterAudio = document.getElementById("characteraudio");

let key = false;

const counterAudio = document.getElementById("counteraudio")

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterCharacter = document.getElementById("counterCharacter");

const Doorone = document.getElementById("doorone");

gamewindow.onclick = function (e) {
  console.log("a;oirghnvaklsjhvbrsladk.l");
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element
    var y = e.clientY - rect.top; //y position within the element

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter  + "px";

    console.log(e.target.id);
    switch(e.target.id){
    case "doorone":
      console.log("case store 1")
      console.log(mainCharacterSpeech);
      console.log(characteraudio);
      showMessage(mainCharacterSpeech, characterAudio, "O my god i am invisible");
      setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
      setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Hello i am your fellow ghost <br>I just wanted to say you completed<br> the short game!");
      setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Ok thank you can you tell me <br> why i am invisible?");
      setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "no");
      setTimeout(function () { counterCharacter.style.opacity = 0; }, 12 * sec);
console.log("STOPSEAPKAING");
        break;
    }
}



function showmessagedie(message) {
    
      characteraudio.currentTime = 0;
      characteraudio.play();
    diedspeech.innerHTML = message;
    diedspeech.style.opacity = 1;
    antichange = true;
    setTimeout(hidemessagedie, 4*sec);
    
    
}

function hidemessagedie() {
    diedspeech.style.opacity = 0;
}



function showMessage(targetBubble, targetAudio, message) {
  console.log("SPERAREAK");
  targetAudio.currentTime = 0;
  targetAudio.play();
  targetBubble.innerHTML = message;
  targetBubble.style.opacity = 1;
  setTimeout(hideMessage, 4 * sec, targetBubble, targetAudio);
}

function hideMessage(targetBubble, targetAudio) {
  targetAudio.pause();
  targetBubble.innerHTML = "...";
  targetBubble.style.opacity = 0;
}






let different;


var Grass1 = document.getElementById("grass1");

var Grass2 = document.getElementById("grass2");
var Grass3 = document.getElementById("grass3");
var Grass4 = document.getElementById("grass4");
var Grass5 = document.getElementById("grass5");
var Grass6 = document.getElementById("grass6");
var Grass7 = document.getElementById("grass7");
var Grass8 = document.getElementById("grass8");
var Grass9 = document.getElementById("grass9");
var Grass10 = document.getElementById("grass10");
var Grass11 = document.getElementById("grass11");
var Grass12 = document.getElementById("grass12");
var Grass13 = document.getElementById("grass13");
var Grass14 = document.getElementById("grass14");
var Wall1 = document.getElementById("wall1");
var slipkey = document.getElementById("keyslip")


setInterval(function() {
  
  Switch(Grass1);
  Switch(Grass2);
  Switch(Grass3);
  Switch(Grass4);
  Switch(Grass5);
  Switch(Grass6);
  Switch(Grass7);
  Switch(Grass8);
  Switch(Grass9);
  Switch(Grass10);
  Switch(Grass11);
  Switch(Grass12);
  Switch(Grass13);
  Switch(Grass14);
  Switch(Wall1);
  Switch(keyslip);
  
}, 50);


function Switch(object){
    var mainCharacterRect = mainCharacter.getBoundingClientRect();
    var objectRect = object.getBoundingClientRect();
  
    if (mainCharacterRect.left < objectRect.right && mainCharacterRect.right > objectRect.left && mainCharacterRect.top < objectRect.bottom && mainCharacterRect.bottom > objectRect.top) {
     
        
        
     switch (object) {
      
  
      case Grass1:
        mainCharacter.style.transition = "none";
        setTimeout(mainCharacter.style.transition = "all 1s ease-in-out",100);
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          mainCharacter.style.transition = "all 1s ease-in-out";
          break;
  
          case Grass2:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass3:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass4:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass5:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass6:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass7:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass8:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass9:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass10:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass11:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass12:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass13:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Grass14:
          mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("died of grass poison");
          console.log("died of grass poison");
          break;

          case Wall1:
            mainCharacter.style.left = "407px";
          mainCharacter.style.top = "494px";
          showmessagedie("Tried to climb up the wall but fell and broke ur ankle and died");

          break;

      default:
          hidemessagedie();
          break;
  }}
}


