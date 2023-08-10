import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Cat, CatLatest } from './pages';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='life' element={<Cat />}/>
        <Route path='life/latest' element={<CatLatest />}/>
      </Routes>
    </div>
  )
}
export default App 