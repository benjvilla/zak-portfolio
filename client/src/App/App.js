// App imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Materials from "../components/Materials";
import Contact from "../components/Contact";
import Twitter from "../images/twitter-logo.png";
import Behance from "../images/behance-logo.png";
import LinkedIn from "../images/linkedin-logo.png";
import Medium from "../images/medium-logo.jpg";
import Spotify from "../images/spotify-logo.jpg";

// App function
export default function App() {
  return (
    <>
      <header>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <nav className="nav">
          <h1 className="Zak">
            Zak
            <br />
            Rittenhouse
          </h1>
          <Nav />
        </nav>
      </header>

      <main className="main" id="main-content">
        <content>
          <Routes>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="materials" element={<Materials />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </content>

        <section className="footerWithSocials">
          <div className="logos">
            <a href="https://twitter.com/ZDRittenhouse" target="_blank">
              <img className="logos" src={Twitter} alt="Twitter Logo" />
            </a>
            <a
              href="https://www.behance.net/zakariahrittenhouse"
              target="_blank"
            >
              <img className="logos" src={Behance} alt="Balance Logo" />
            </a>
            <a href="https://www.linkedin.com/in/zrittenhouse/" target="_blank">
              <img className="logos" src={LinkedIn} alt="LinkedIn Logo" />
            </a>
            <a href="https://zakariahrittenhouse.medium.com/" target="_blank">
              <img className="logos" src={Medium} alt="Medium Logo" />
            </a>
            <a
              href="https://open.spotify.com/playlist/0WrqEAybfvINRqU8tGbncC?si=RXsiDvppT36aoyIFC345Ew&nd=1"
              target="_blank"
            >
              <img className="logos" src={Spotify} alt="Spotify Logo" />
            </a>
          </div>

          <footer className="footer">
            <Footer />
          </footer>
        </section>
      </main>
    </>
  );
}
