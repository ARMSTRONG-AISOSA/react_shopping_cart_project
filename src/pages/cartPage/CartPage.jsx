import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import './cartPage.css';
import { useContext } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

    const navigate = useNavigate();

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    // Variable
    const totalAmount = getTotalCartAmount();

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>

            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />
                    }
                })}
            </div>

            <div className="checkout">
                {totalAmount > 0 ?
                    (<>
                        <p>Subtotal: ${totalAmount}</p>
                        <button
                            onClick={() => navigate("/react_shopping_cart_project")}
                        >Continue Shopping</button>
                        <button>Checkout</button>
                    </>)
                     :
                    (<><h2>Your Cart is Empty</h2></>)
                }
            </div>
        </div>
    )
}

export default CartPage
