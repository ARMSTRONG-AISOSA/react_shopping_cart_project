import { Routes, Route } from 'react-router-dom';
import ShopHome from './pages/home/ShopHome';
import CartPage from './pages/cartPage/CartPage';
import Navbar from './components/navbar/Navbar'
import ErrorPage from './pages/errorPage/ErrorPage';
import { ShopContextProvider } from './context/shopContext';
import './App.css';


function App() {

  return (
    <main className='main-container'>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path='/react_shopping_cart_project' element={<ShopHome />} />
          <Route path='/react_shopping_cart_project/cartpage' element={<CartPage />} />
          {/* Catch-all route for 404 errors */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ShopContextProvider>
    </main>
  )
}

export default App
