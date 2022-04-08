// App imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav.js";
import Portfolio from "../components/Portfolio";
import Materials from "../components/Materials";
import Contact from "../components/Contact";
import Home from "../components/Home";

// App function
export default function App() {
  return (
    <>
      <header>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <nav className="nav">
          <h1 className="Zak">Zak<br/>Rittenhouse</h1>
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

      <footer className="footer">
        <Nav/>
      </footer>
    </main>
    </>
  );
}
