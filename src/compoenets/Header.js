import React from "react";
import './header.css';

function Header() {
    return (
        <header>
            <div className="logo">
            <h1>Apna Ghr.com</h1>
            </div>
        <nav>
        <div className="left-section">
                <a href="#" class="sign-up-btn">Sign Up</a>
                <a href="#" class="login-btn">Login</a>
            </div>
            <ul>
                <li><a href="/">My Home</a></li>
                <li><a href="/properties">Properties</a></li>
                <li><a href="/buy">Buy</a></li>
                <li><a href="/sell">Sell</a></li>
                <li><a href="/rent">Rent</a></li>
                <li><a href="/mortgage">Mortgage</a></li>
                <li><a href="/find realtors">Find Realtors</a></li>
                <li><a href="/newinsights">New & Insights</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;