import './Header.css'
import { useState } from 'react';
import logo from '../../assets/logo.png' ;
import { CgShoppingBag } from 'react-icons/cg' ;
import {GoThreeBars} from 'react-icons/go' ;
const Header = () => {
  const [showMenu, setShowMenu] = useState(true) 
  const toggleMenu = () => {
    setShowMenu((showMenu)=> !showMenu)
  }

  return (
    <div className='container'>
        <div className='logo'>
        <img src={logo} alt='logo' />
        <span>Amazon</span>
        </div>
        <div className='right'>
        <div className='bars' onClick={toggleMenu}>
          <GoThreeBars/>
        </div>
      
        <ul className='menu' style={{display: showMenu? 'inherit': 'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
        </ul>
        <input type='text' placeholder='Search' className='search'/>
        <CgShoppingBag className='cart' />
        </div>
    </div>
  )
}

export default Header