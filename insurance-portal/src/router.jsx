import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar.jsx'
import HealthInsurance from './health-insurance.jsx'
import VehicleInsurance from './vehicle-insurance.jsx'
import LifeInsurance from './life-insurance.jsx'
import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'
import HomePage from './home-page.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter