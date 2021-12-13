// Setup URL to call API:
const DOMAIN = 'https://rogue-api.herokuapp.com/api/';
const GENERATOR = `uniform`
const url = `${DOMAIN}${GENERATOR}?width=80&height=25`;

// Get needed HTML tags

// Set placeholder

// Arrow Key Listeners (can be expanded to use WASD and num keys as well.)
// `https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript/5597114`
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


// Function to Generate Dungeons

// Function to render PC

// Function to render Staircase

// Function to move PC

// Function to interact with objects

// Function to increment level

// Function to display level

// Function for win

// Function for activity log