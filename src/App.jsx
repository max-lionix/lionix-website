import { useState } from 'react';
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Project from './pages/Project/Project.jsx';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project/>} />
          <Route
            path="/service"
            element={<UnderConstruction title="Послуги" />}
          />
          <Route
            path="/blog"
            element={<UnderConstruction title="Блог" />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
