import './Virtual.css'
import shade from '../../assets/shade.png'
import  ReactCompareImage  from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
  return (
    <div className='virtual'>
        <div className='v-left'>
            <span>
                Virtual Try-On
            </span>
            <span>
                Never Buy The Wrong Shade Again!
            </span>
            <span>
                Try Now!
            </span>
            <img src={shade} alt='shade' />
        </div>
        <div className='v-right'>
            <div className='v-wrapper'>
        <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
        </div>
    </div>
  )
}

export default Virtual