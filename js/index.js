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

    switch(e.target.id){
    case "doorone":
        console.log("lets go trough");
        break;
    
    case "doortwo":
    console.log("there is nothing here");
    break;
    default:
        console.log("there is nothing here")
        break;
    }
}