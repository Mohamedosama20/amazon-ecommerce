import './Footer.css'
import logo from '../../assets/logo.png'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelephone }  from 'react-icons/bs'
import { RiInboxArchiveLine } from 'react-icons/ri'
import { VscSignIn } from 'react-icons/vsc'
import { SiAboutdotme } from 'react-icons/si'
import { GrResources } from 'react-icons/gr'
const Footer = () => {
  return (
    <div className='footer'>
        <hr/>
        <div className='footer-content'>
            <div className='f-logo'>
                <img src={logo} alt='logo'/>
                <span>amazon</span>
            </div>
            {/* footer contact */}
            <div className='block'>
            <div className='f-detail'>
                <span>Contact Us</span>
                <span className='pngIcon'>
                <HiOutlineLocationMarker className='icon'/>
                    <span>123, Main Street, New York, USA</span>
                </span>
                <span className='pngIcon'>
                <BsTelephone className='icon'/>
                    <a href='tel:011-187-88751'>011-187-88751</a>
                </span>
                <span className='pngIcon'>
                <RiInboxArchiveLine className='icon'/>
                    <a href='mailto:mohamedosama667@yahoo.com'>Mohamedosama667@yahoo</a>
                </span>
            </div>
            </div>
            {/* footer account */}
            <div className='block'>
            <div className='f-detail'>
                <span>Account</span>
                <span className='pngIcon'>
                <VscSignIn className='icon'/>
                    <span>Sign In</span>
                </span>
            </div>
            </div>
              {/* footer company */}
              <div className='block'>
            <div className='f-detail'>
                <span>Company</span>
                <span className='pngIcon'>
                <SiAboutdotme className='icon'/>
                    <span>About Us</span>
                </span>
            </div>
            </div>
              {/* footer resources */}
              <div className='block'>
            <div className='f-detail'>
                <span>Resources</span>
                <span className='pngIcon'>
                <GrResources className='icon'/>
                    <span>Privacy & Resources About Us</span>
                </span>
            </div>
            </div>
        </div>
        <div className='copy-right'>
            <span>CopyRight ©2022 Amazon Clone.</span>
            <span>All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer