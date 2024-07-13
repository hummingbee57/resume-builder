import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './maincomponents/header'
import PersonalDetails from './pages/PersonalDetails'

function App() {
  
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal_details" element={<PersonalDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
