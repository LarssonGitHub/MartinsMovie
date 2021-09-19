import {Link} from "react-router-dom";
import React, {useState} from "react"

export default function Header() {

    const [navbarOpen,
        setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev) //den här variabeln hade jag döpt till isOpen

    }

    return (
        <header>
            <div onClick={handleToggle} className={`hamburger ${navbarOpen
                ? "active"
                : ""}`}>
                    <span className={"bar"}></span>
                    <span className={"bar"}></span>
                    <span className={"bar"}></span>
                </div>
                {
                //Jag förstår inte genom att läsa koden vad de tre span elementen gör för nytta
            }
            <nav
                onClick={handleToggle}
                className={`menuNav ${navbarOpen
                ? " showMenu"
                : ""}`}>
                <ul className="removeListDecoration">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search movies</Link>
                    </li>
                    <li>
                        <Link to="/booking">Booking</Link>
                    </li>
                </ul>
                <div className={"menuNavBackground"}></div>
            </nav>
        </header>
    );
}