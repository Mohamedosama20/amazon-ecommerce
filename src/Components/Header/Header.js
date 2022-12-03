import './Header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className='logo'>
        Logo
        </div>
        <div className='right'>
        <div className='menu'>
        </div>
        <input type='text' placeholder='Search' className='search'/>
        <span>PNg icon</span>
        </div>
    </div>
  )
}

export default Header