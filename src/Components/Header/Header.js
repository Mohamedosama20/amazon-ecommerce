import './Header.css'
import logo from '../../assets/logo.png' ;
import { CgShoppingBag } from 'react-icons/cg' ;
const Header = () => {
  return (
    <div className='container'>
        <div className='logo'>
        <img src={logo} alt='logo' />
        <span>Amazon</span>
        </div>
        <div className='right'>
        <div className='menu'>
        <ul className='menu'>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
        </ul>
        </div>
        <input type='text' placeholder='Search' className='search'/>
        <CgShoppingBag className='cart' />
        </div>
    </div>
  )
}

export default Header