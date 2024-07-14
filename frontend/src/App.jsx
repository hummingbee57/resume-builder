import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './maincomponents/header'
import PersonalDetails from './pages/PersonalDetails'
import EducationDetails from './pages/EducationDetails'
import Experience from './pages/Experience'

function App() {
  
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal_details" element={<PersonalDetails />} />
      <Route path="/education_details" element={<EducationDetails />} />
      <Route path="/experience" element={<Experience/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
