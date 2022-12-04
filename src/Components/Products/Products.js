import './Products.css';
import Plane from '../../assets/plane.png';
import {ProductsData} from '../../data/products';
import {useState} from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {
    const [parent] = useAutoAnimate()
const [MenuProducts, setMenuProducts] = useState(ProductsData);
const filter = (type) => { 
    setMenuProducts(ProductsData.filter((product) => 
    product.type === type));
}
  return (
    <div className='p-container'>
        <img src={Plane} alt='plane'/>
        <h1>Our Featured Products</h1>
        <div className='p-menu'>
                <ul className='p-menu-items'>
                    <li onClick={()=> setMenuProducts(ProductsData)}>All</li>
                    <li onClick={()=> filter('skin care')}>Skin Care</li>
                    <li onClick={()=> filter('conditioner')}>Conditioners</li>
                    <li onClick={()=> filter('foundation')}>Foundations</li>
                </ul>

                <div className='p-list' ref={parent}>
                {
                    MenuProducts.map((product, i)=>( 
                    <div className='product'>
                        <div className='left-s'>
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