import {Link} from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listings">Search new movies</Link>
                    </li>
                    <li>
                        <Link to="/booking">Booking</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}