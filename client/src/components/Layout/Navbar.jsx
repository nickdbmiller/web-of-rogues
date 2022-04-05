import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/game">Game</NavLink>
                </li>
            </ul>
        </nav>
    )
}
