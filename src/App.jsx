import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ErrorPage from './pages/errorPage/ErrorPage';
import './App.css';

function App() {

  return (
    <main className='main-container'>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/react_shopping_cart_project' element={<Home />} />
        {/* Catch-all route for 404 errors */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
