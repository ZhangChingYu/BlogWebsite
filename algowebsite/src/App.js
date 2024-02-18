import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home} from './pages';

import './index.css';

const App = () => {
  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </div>
  )
}
export default App 