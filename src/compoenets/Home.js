import React from "react";
import Header from "./Header";
import Preview from "./preview";
import Previewbtn from "./previewbtn";
import Previewmap from "./previewmap";
import CoverArticle from "./coverarticle";
import './home.css';
import backgroundimg from "../assets/images/hp-hero-desktop.webp"
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";


function Homepage() {

    
    return(
        <div className="home-page" >
            <Header/>
            <img src={backgroundimg} alt="background" className="bottom-image"/>
            <div className="main-content">
        <main>
            <section className="search-section">
                <h2>The #1 site real estate professionals trust*</h2>
            </section>
            <section className="featured-properties">
                <h2>Featured Properties</h2>
            </section>
        </main>
        <Preview/>
        <Previewbtn/>
        <Previewmap />
        <CoverArticle/>
        </div>
        <footer className="footer">
                <div className="social-media">
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                    <a href="https://www.youtube.com"><FaYoutube /></a>
                    <a href="https://www.linkedin.com"><FaLinkedin /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/feedback">Feedback</a></li>
                        <li><a href="/media-room">Media Room</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/terms">Terms</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;