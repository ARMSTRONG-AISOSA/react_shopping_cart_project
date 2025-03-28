import './product.css';

const Product = (props) => {

    const { id, productName, price, productImage } = props.data;

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className="addToCartBtn" >Add To Cart</button>
        </div>
    )
}

export default Product
