import { Link } from 'react-router-dom';
import { BsCart4, BsShop } from "react-icons/bs";
import { LuBaggageClaim } from "react-icons/lu";
import './navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='#' className='logo'>
        <LuBaggageClaim size={32} />
        <h3>E-ComTech</h3>
      </Link>
      <div className='links'>
        <Link to='/react_shopping_cart_project'>
          Shop <BsShop size={32} />
        </Link>
        <Link to='/react_shopping_cart_project/cartpage'>
          My Cart <BsCart4 size={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar


