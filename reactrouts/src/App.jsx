import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import './App.css'
import Contact from './Contact.jsx'


function Navbar() {
  return (
    <header className="site-header">
        <nav >
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
