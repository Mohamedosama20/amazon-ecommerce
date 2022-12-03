import './Products.css';
import Plane from '../../assets/plane.png';
import {ProductsData} from '../../data/products';
import {useState} from 'react';

const Products = () => {
const [MenuProducts, setMenuProducts] = useState(ProductsData);
  return (
    <div className='p-container'>
        <img src={Plane} alt='plane'/>
        <h1>Our Featured Products</h1>
        <div className='p-menu'>
                <ul className='p-menu-items'>
                    <li>All</li>
                    <li>Skin Care</li>
                    <li>Conditioners</li>
                    <li>Foundations</li>
                </ul>

                <div className='p-list'>
                {
                    MenuProducts.map((product, i)=>( 
                    <div className='product'>
                        <div className='p-left'>
                            <div className='name'>
                                <span>
                                    {product.name}
                                </span>
                                <span>
                                {product.detail}
                                </span>
                            </div>
                            <span>{product.price}$</span>
                            <div>Show Now</div>
                        </div>
                        <img src={product.img} alt='product' className='p-img'/>
                    </div>
                    )) 
                }
                </div>
            </div>
        </div>
  )
}

export default Products;