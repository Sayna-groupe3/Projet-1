var maVoiture = document.querySelector('.voiture');
let positionInitiale = maVoiture.style.left;
let positionInitiale2 = maVoiture.style.top;


function faireBouger(direction, rotation) {
    console.log('Rotation  >>>>>', rotation);
    console.log('Direction >>>>>', direction);
    console.log('Position initiale >>>>>', positionInitiale);
    positionInitiale = +positionInitiale + direction;
    console.log('Nouvelle position >>>>>', positionInitiale);
   
    if (direction) {
        document.querySelector('.voiture').style.webkitTransitionDuration = "1.5s";
        document.querySelector('.voiture').style.left = positionInitiale + 'px';

    } 
    else if (rotation) {
        document.querySelector('.voiture').style.webkitTransitionDuration = "1s";
        var positionRotation = maVoiture.style.transform;
        console.log("valeur = ", positionRotation);

        if (positionRotation == "") {
        
            document.querySelector('.voiture').style.transform = "rotate(45deg)";

            } 
            else if (positionRotation == "rotate(45deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(90deg)";

            } 
            else if (positionRotation == "rotate(90deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(135deg)";
            }
             else if (positionRotation == "rotate(135deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(180deg)";
            }
            else if (positionRotation == "rotate(180deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(225deg)";
            }
            else if (positionRotation == "rotate(225deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(270deg)";
            }
            else if (positionRotation == "rotate(270deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(315deg)";
            }
             else if (positionRotation == "rotate(315deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(360deg)";
            }
             else if (positionRotation == "rotate(360deg)") {
           
            document.querySelector('.voiture').style.transform = "rotate(45deg)";
            }
    }
}            
function faireHaut(dir) {

    positionInitiale2 = +positionInitiale2 + dir;
    document.querySelector('.voiture').style.top = positionInitiale2 + 'px';
}

