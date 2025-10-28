import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup';
import Signin from './pages/Signin';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>

      </Routes>
    </Router>
   
  )
}

export default App
