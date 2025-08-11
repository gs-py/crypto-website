
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Base64Visualizer from './pages/Base64'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/base64' element={<Base64Visualizer />} />
      <Route path='/jwt-token' element={<Landingpage />} />
   </Routes>
  )
}

export default App
