// App imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.js'
import Portfolio from '../components/Portfolio';
import Materials from '../components/Materials';
import Contact from '../components/Contact';
import Home from '../components/Home';


// App function
export default function App() {

  return (
    <main className="App">
      <header>
        <nav>
          <Nav/>
        </nav>
      </ header>
      
      <content>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="materials" element={<Materials/>}/>
          <Route path="contact" element={<Contact/>}/>
        </ Routes>

      </ content>

      <footer>
        <Nav/>
      </ footer>
     
    </ main>
  );
}


