// Setup URL to call API:
const DOMAIN = 'https://rogue-api.herokuapp.com/api/';
const GENERATOR = `uniform`
const url = `${DOMAIN}${GENERATOR}?width=80&height=25`;

// Get needed HTML tags
const dungeonContainer = document.querySelector("#dungeon-container");

// Set placeholder

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

// Function to call API
async function fetchData() {
    try {
        // let res = await axios.get(url);
        console.log(url);
        console.log(res);
        resetDungeon();
        // Passes the response as an argument to the generator.
        dungeonGenerator(res);
    } catch (error) {
        displayError();
    }
}
fetchData();

// Error Handler
function displayError() {
    console.log("404 Dungeon Data");
};

// Function to Generate Dungeons
// Ref: `http://rogue-api.herokuapp.com/`
function dungeonGenerator(data) {
    let dungeon = document.createElement(`dungeon`);
    data.map.forEach((row, x) => {
        let rowObj = document.createElement("row");
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
}

// Function to reset dungeon

function resetDungeon() {
    while (dungeonContainer.firstChild) {
        dungeonContainer.removeChild(dungeonContainer.firstChild);
    }
}

// Function to render PC

// Function to render Staircase

// Function to move PC

// Function to interact with objects

// Function to increment level

// Function to display level

// Function for win

// Function for activity log