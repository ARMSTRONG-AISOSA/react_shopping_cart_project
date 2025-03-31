import './product.css';
import { ShopContext } from '../../context/shopContext';
import { useContext } from 'react';

const Product = (props) => {

    const { id, productName, price, productImage } = props.data;

    // useContext
    const { addToCart, cartItems } = useContext(ShopContext);

    // const cartItemsAmount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button
                className="addToCartBtn"
                onClick={() => addToCart(id)}
            >Add To Cart {cartItems[id] > 0 && <>{cartItems[id]}</>}</button>
        </div>
    )
}

export default Product
