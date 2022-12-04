import './Hero.css'
import heroImg from '../../assets/hero.png' ;
import { RiShoppingBagFill } from 'react-icons/ri' ;
import { BsArrowRight } from 'react-icons/bs' ;
import { motion } from "framer-motion" ;


const Hero = () => {
    const transation = {duration: 3, type: 'spring'} 
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
            <motion.div 
            initial={{bottom: '2rem'}}
            whileInView={{bottom: '0rem'}}
            className='blueCircle'
            transation = {transation}>
            </motion.div>
            <motion.img 
             initial={{bottom: '-2rem'}}
            whileInView={{bottom: '0rem'}}
            transation = {transation}
            src={heroImg} alt='hero' />
            <motion.div 
            transation = {transation}
            initial={{right: '4%'}}
            whileInView={{right: '2%'}}
            className='cart2'>
                <RiShoppingBagFill/>
                <div className='signup'>
                    <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
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