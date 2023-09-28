import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Cat, CatLatest, CatCategories, Search, CatCategory, CatArticle, Dragon, DragonTheme, DragonArticle} from './pages';
import { Login, AdminHome } from './adminPages';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='life' element={<Cat />}/>
        <Route path='life/latest' element={<CatLatest />}/>
        <Route path='life/categories' element={<CatCategories />}/>
        <Route path='life/category' element={<CatCategory />}/>
        <Route path='life/article' element={<CatArticle/>}/>
        <Route path='work' element={<Dragon />}/>
        <Route path='work/theme' element={<DragonTheme />}/>
        <Route path='work/article' element={<DragonArticle />}/>
        <Route path='/admin' element = { <Login/> } />
        <Route path='/admin/home' element={ <AdminHome/> } />
      </Routes>
    </div>
  )
}
export default App 