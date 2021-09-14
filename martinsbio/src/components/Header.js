import {Link} from "react-router-dom";

export default function Header({timeStamp}) {

    return (
        <header>
            <nav>
                <ul>
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
            </nav>
            <p>{timeStamp.date}</p>
            <p>{timeStamp.time}</p>
        </header>
    );
}