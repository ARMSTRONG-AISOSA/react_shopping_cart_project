import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import './cartItem.css';

const CartItem = (props) => {

    const { id, productName, price, productImage } = props.data;
    const { addToCart, removeFromCart, cartItems, updateCartItemCount    } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button
                        onClick={() => removeFromCart(id)}
                    > - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => {updateCartItemCount(Number(e.target.value), id)}}
                    />
                    <button
                        onClick={() => addToCart(id)}
                    >+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem