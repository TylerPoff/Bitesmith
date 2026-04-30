import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import './styles/App.css'

function App() {

  return (
    <BrowserRouter>
    <div className='layout'>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
