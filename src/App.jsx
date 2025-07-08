import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Specialist from './components/Specialist'
import Consultation from './components/Consultation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import './App.css'

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
      <span style={{fontSize: '24px', color: '#333', marginLeft: '10px'}}>Loading website</span>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialist" element={<Specialist />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
