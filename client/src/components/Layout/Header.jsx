import Navbar from "./Navbar.jsx"
export default function Header() {
    return (
        <header>
            <h1>
                <a
                    href = "https://github.com/nickdbmiller/web-of-rogues"
                    target="_blank"
                    rel="noreferrer"
                    name = "Web of Rogues"
                >
                    Web of Rogues
                </a>
            </h1>
            <Navbar />
        </header>
    )
}
