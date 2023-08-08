import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Cat } from './pages';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='life' element={<Cat />}/>
      </Routes>
    </div>
  )
}
export default App 