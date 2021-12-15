"use strict";

let playGame = 0;
let score = 0;
let health = 10;
let level = 1;
let currentPlayerPos;
let desiredPos;
let currentStairPos;
let floorTiles = [];

async function runGame() {
    playGame = 1;
    await dungeonGenerator();
    displayInitStats();
    listFloorTiles();
    renderPC();
    renderStairs();
    console.log(currentPlayerPos);
    console.log(currentStairPos);
};

// Setup URL to call API:
const DOMAIN = 'https://rogue-api.herokuapp.com/api/';
const GENERATOR = `uniform`
const dungeonWidth = 60;
const dungeonHeight = 20;
const url = `${DOMAIN}${GENERATOR}?width=${dungeonWidth}&height=${dungeonHeight}`;

// Get needed HTML tags
const dungeonContainer = document.querySelector("#dungeon-container");
const startButton = document.querySelector("#start-button");
const dungeonLevel = document.querySelector("#dungeon-level");
const playerHealth = document.querySelector("#health-stat");
const playerScore = document.querySelector("#score");

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
    await callAPI(url);
    let dungeon = document.createElement('dungeon');
    let tileNum = 0;
    data.map.forEach((row, x) => {
            let rowObj = document.createElement('row');
            row.forEach((col, y) => {
                let tile = document.createElement("div");
                tile.setAttribute('value', col);
                tile.setAttribute('coord', `${x+1},${y+1}`);
                tile.className = col === 1 ? "wall" : "floor";
                tileNum++;
                tile.id = `-${tileNum}`;
                rowObj.appendChild(tile);
            });
            dungeon.appendChild(rowObj);
        });
        dungeonContainer.appendChild(dungeon);
    };

// Function to reset dungeon
function resetDungeon() {
    while (dungeonContainer.firstChild) {
        dungeonContainer.removeChild(dungeonContainer.firstChild);
    }
}

// Function to render PC
    // RNG that picks a floor tile and then sets the innertext to @ that fills the tile
function renderPC () {
    let position = `${floorTiles[RNG(0, (floorTiles.length-1))]}`;
    const tile = document.getElementById(`${position}`);
    currentPlayerPos = position;
    tile.innerText = `@`;
}

// Functions to display stats
function displayInitStats () {
    dungeonLevel.innerText = `Dungeon Level: 1`
    playerHealth.innerText = `HP: 10/10`
    playerScore.innerText = `Score: 0pts`
}

function displayCurrentStats () {
    dungeonLevel.innerText = `Dungeon Level: ${level}`
    playerHealth.innerText = `HP: ${health}/10`
    playerScore.innerText = `Score: ${score}pts`
}
// Function to render Staircase
    // RNG that picks a floor tile and then sets the innertext to > that fills the tile
function renderStairs () {
    let position = `${floorTiles[RNG(0, (floorTiles.length-1))]}`;
    let tile = document.getElementById(`${position}`);
    currentStairPos = position;
    if (currentPlayerPos == currentStairPos) {
        while (currentPlayerPos == currentStairPos) {
            position = `${floorTiles[RNG(0, (floorTiles.length-1))]}`;
            tile = document.getElementById(`${position}`);
            currentStairPos = position;
        }
        tile.innerText = `>`;
    } else {
        tile.innerText = `>`;
    }
}

// Function to move PC
    // moveUp/Down/Left/Right() {Checks for wall, then checks for object, then changes tiles}

// Arrow Key Listeners (can be expanded to use WASD and num keys as well.)
// Ref: `https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript/5597114`

document.onkeydown = checkKey;
function checkKey(e) {
    if (playGame >= 1) {
        if (e.keyCode == '37') {            //Left
            movePlayerLeft();
        } else if (e.keyCode == '38') {     //Up
            movePlayerUp();
        } else if (e.keyCode == '39') {     //Right
            movePlayerRight();
        } else if (e.keyCode == '40') {     //Down
            movePlayerDown();
        } else {
            console.log("Invalid Input");
        }
    };
};

function movePlayerLeft() {
    let intPlayerPos = parseInt(currentPlayerPos);
    intPlayerPos++;
    desiredPos = intPlayerPos.toString();
    checkTile();
}

// Each coordinate is gonna look like (1-${height})(1-{$width})

function movePlayerUp() {

}

function movePlayerRight() {
    let intPlayerPos = parseInt(currentPlayerPos);
    intPlayerPos--;
    desiredPos = intPlayerPos.toString();
    checkTile();
}

function movePlayerDown() {

}

function changePlayerPos() {
    let currentTile = document.getElementById(`${currentPlayerPos}`);
    currentTile.innerText = ``;
    let newTile = document.getElementById(`${desiredPos}`);
    newTile.innerText = `@`;
    currentPlayerPos = desiredPos;
};

// Function to interact with objects
    // Checks if there is a staircase and acts accordingly.
function checkTile () {
    if (floorTiles.includes(desiredPos)) {
        if (desiredPos == currentStairPos) {
            incrementLevel();
        } else {
            changePlayerPos();
        };
    } else {
        console.log("Wall Collision");
    };
};

// Function to increment level
function incrementLevel () {
    level++;
    displayCurrentStats();
    checkForWinner();
}

// Function for win
async function checkForWinner () {
    if (gameLevel > 10) {
        //Change dungeon to victory screen.
        alert("You win!");
    } else {
        await dungeonGenerator();
        renderPC();
        renderStairs();
    };
};

// Function for activity log

// RNG
function RNG(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// Makes an array of the ID's of floor tiles
function listFloorTiles () {
    for (let r = 1; r <= (dungeonHeight*dungeonWidth); r++) {
        let thisTile = document.getElementById(`-${r}`);
        if (thisTile.className == `floor`) {
            floorTiles.push(`-${r}`);
        };
    };
    return floorTiles;
};