document.getElementById("maintitle").innerText = "point and click adventures";
const offsetCharacter = 16;
const gamewindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gamewindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element
    var y = e.clientY - rect.top; //y position within the element
    
    mainCharacter.style.left = x - offsetCharacter+"px";
    mainCharacter.style.top = y - offsetCharacter+"px";

    console.log(e.target.id);

function dectectcollision(one,two){
    rect1=document.getElementById(one);
    rect2=document.getElementById(two);

    if (rect1.left < rect2.right && rect1.right > rect2.left &&
        rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
            console.log("collision");
        }
}

    switch(e.target.id){
    case "doorone":
        console.log("lets go trough");
        break;
    
    case "grass1":
        document.getElementById("mainCharacter").style.left = "407px";
        document.getElementById("mainCharacter").style.top = "494px";
    console.log("died of grass poison");
    break;


    default:
        console.log("there is nothing here")
        break;
    }
}