import React from 'react'

export default function GameScreen() {
    return (
        <main>
            <section  className="sidebar" id="player-stats">
                <h2>Player Stats</h2>
                <section>
                    <ul>
                        <li id = "health-stat">HP: 10/10</li>
                        <li id = "score">Score: 0pts</li>
                    </ul>
                </section>
            </section>
            <section  id="main-game">
                <section  id="level-container">
                    <h3 id="dungeon-level" >Dungeon Level: 0</h3>
                    <section id= "dungeon-container">
                        <section id="onload-placeholder">
                            <button className = "start-button">Strike the Earth!</button>
                        </section>
                    </section>
                </section>
                <section  id="activity-log">
                    <h3>Activity Log</h3>
                    <ul id = "readout">
                        <li>{"> Instructions: Press the button to begin the game!"}</li>
                        <li>{"> Use WASD and arrow keys to move your character (@) to the stairs (>) in each level."}</li>
                        <li>{"> Once you reach the end of level 10, you win!"}</li>
                    </ul>
                </section>
            </section>
            <section  className="sidebar" id="player-inventory">
                <h2>Inventory</h2>
                <section>
                    <ul>
                        <li>Sword</li>
                        <li>Food</li>
                    </ul>
                </section>
            </section>
        </main>
    )
}
