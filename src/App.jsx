import { Routes, Route } from 'react-router-dom';
import ShopHome from './pages/home/ShopHome';
import CartPage from './pages/cartPage/CartPage';
import Navbar from './components/navbar/Navbar'
import ErrorPage from './pages/errorPage/ErrorPage';
import './App.css';


function App() {

  return (
    <main className='main-container'>
      <Navbar />
      <Routes>
        <Route path='/react_shopping_cart_project' element={<ShopHome />} />
        <Route path='/react_shopping_cart_project/cartpage' element={<CartPage />} />
        {/* Catch-all route for 404 errors */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
