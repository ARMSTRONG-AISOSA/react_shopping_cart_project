import './errorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/react_shopping_cart_project">Go back to Home</Link>
    </div>
  )
}

export default ErrorPage
