import Product from '../../components/product/Product';
import { PRODUCTS } from '../../products';
import './shopHome.css';

const ShopHome = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>E-ComTech</h1>
      </div>

      <div className='products'>
        {PRODUCTS.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  )
}

export default ShopHome
