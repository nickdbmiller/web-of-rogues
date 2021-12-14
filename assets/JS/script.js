"use strict";

let playGame = 0;

function runGame() {
    playGame = 1;
    dungeonGenerator();
    renderPC();
};

// Setup URL to call API:
const DOMAIN = 'https://rogue-api.herokuapp.com/api/';
const GENERATOR = `uniform`
const url = `${DOMAIN}${GENERATOR}?width=80&height=25`;

// Get needed HTML tags
const dungeonContainer = document.querySelector("#dungeon-container");
const startButton = document.querySelector("#start-button");

// Handle Button
startButton.addEventListener("click", runGame);

// Function to call API
let data;
async function callAPI(endpoint) {
    try {
        let res = await axios.get(endpoint);
        data = res.data;
        return data;
    } catch (error) {
        displayError();
    };
};

// Error Handler
function displayError() {
    console.log("404 Dungeon Data");
};

// Function to Generate Dungeons
// Based on algorithm Ref: `http://rogue-api.herokuapp.com/`
async function dungeonGenerator() {
    resetDungeon();
    setPlaceholder();
    await callAPI(url);
    let dungeon = document.createElement('dungeon');
    data.map.forEach((row, x) => {
            let rowObj = document.createElement('row');
            row.forEach((col, y) => {
                let colObj = document.createElement("tile");
                colObj.setAttribute('value', col);
                colObj.setAttribute('coord', `${x+1},${y+1}`);
                colObj.className = col === 1 ? "wall" : "floor";
                rowObj.appendChild(colObj);
            });
            dungeon.appendChild(rowObj);
        });
        dungeonContainer.appendChild(dungeon);
    };

// Function to resize tile elements for screen size

// let winWidth;
// window.addEventListener('resize', tileSizer)

// function tileSizer () {
//     if (playGame == "1") {
//         tile = document.querySelectorAll("tile");
//         console.log(tile)
//         winWidth = window.innerWidth;
//         tile.style.width = "20px";
//         tile.style.height = "20px"
//     }
// }

// Function to reset dungeon

function resetDungeon() {
    while (dungeonContainer.firstChild) {
        dungeonContainer.removeChild(dungeonContainer.firstChild);
    }
}

// Function to set placeholder
function setPlaceholder() {
    console.log("Placeholder");
}

// Function to render PC
    // RNG that picks a floor tile and then sets the innertext to @ that fills the tile
function renderPC () {
    console.log("PC");
}

// Function to render Staircase
    // RNG that picks a floor tile and then sets the innertext to > that fills the tile


// Function to move PC
    // moveUp/Down/Left/Right() {Checks for wall, then checks for object, then changes tiles}

// Arrow Key Listeners (can be expanded to use WASD and num keys as well.)
// Ref: `https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript/5597114`
document.onkeydown = checkKey;
function checkKey(e) {
    if (e.keyCode == '37') {
        console.log("Left");
    } else if (e.keyCode == '38') {
        console.log("Up");
    } else if (e.keyCode == '39') {
        console.log("Right");
    } else if (e.keyCode == '40') {
        console.log("Down");
    };
};

// Function to interact with objects
    // Checks if there is a staircase and acts accordingly.

// Function to increment level
let gameLevel = 1;
function incrementLevel () {
    gameLevel++;
}

// Function to display level
    // Select level output in the DOM and set it to the current level when increment level happens.

// Function for win
function checkForWinner () {
    if (gameLevel >= 10) {
        //Change dungeon to victory screen.
        alert("You win!");
    }
}

// Function for activity log