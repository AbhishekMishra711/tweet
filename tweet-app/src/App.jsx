
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Home from './pages/Users/Home';
import Profile from './pages/Users/Profile';


function App() {
  return (
    <>
      
    <div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>

    </>
  )
}

export default App
