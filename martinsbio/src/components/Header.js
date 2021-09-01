import {
    Link,
  } from "react-router-dom";

export default function Header() {

    return (
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/listings">What's new?</Link>
              </li>
            </ul>
            <p>Thios is your header! Contains links</p>
            
          </nav>
          </header>
    );
  }