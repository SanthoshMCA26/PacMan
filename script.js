var pos = 0;

let pageWidth = window.innerWidth;

const pacArray = [
    ["./images/PacMan1.png", "./images/PacMan2.png"],
    ["./images/PacMan3.png", "./images/PacMan4.png"]
];

var direction = 0;
var focus = 0;

function Run() {

    // Get the Pac-Man image
    let img = document.getElementById("pacman");

    // Get image width
    let imgWidth = img.width;

    // Change image frame
    focus = (focus + 1) % 2;

    // Check whether Pac-Man reaches the boundary
    direction = checkPageBounds(
        direction,
        imgWidth,
        pos,
        pageWidth
    );

    // Change Pac-Man image
    img.src = pacArray[direction][focus];

    // Move Pac-Man
    if (direction == 1) {

        pos -= 20;

    } else {

        pos += 20;
    }

    // Set the new position
    img.style.left = pos + "px";
}


// Run every 200 milliseconds
setInterval(Run, 200);


// Check screen boundaries
function checkPageBounds(direction, imgWidth, pos, pageWidth) {

    if (pos + imgWidth > pageWidth) {
        direction = 1;
    }

    if (pos < 0) {
        direction = 0;
    }

    return direction;
}