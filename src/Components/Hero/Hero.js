import './Hero.css'
import heroImg from '../../assets/hero.png' ;
import { RiShoppingBagFill } from 'react-icons/ri' ;
import { BsArrowRight } from 'react-icons/bs' ;

const Hero = () => {
  return (
    <div className='container2'>
        {/* left side */}
        <div className='h_sides'>
            <span className='text1'>Skin Protection Cream</span>
            <div className='text2'>
                <span>Trendy Collections</span>
                <span>Seedily say has suitable disposal and boy.<br/>Exercise joy man children rejoiced.</span>
            </div>
        </div>
        {/* middle side */}
        <div className='wrapper'>
            <div className='blueCircle'></div>
            <img src={heroImg} alt='hero' width={600} />
            <div className='cart2'>
                <RiShoppingBagFill/>
                <div className='signup'>
                    <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
        {/* right side */}
        <div className='h_sides'>
            <div className='traffic'>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className='customers'>
            <span>100K</span>
            <span>Happy Customers</span>
        </div>
        </div>
    </div>
  )
}

export default Hero