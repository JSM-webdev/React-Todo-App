import { Link } from 'react-router-dom'
import UnAuthedLinks from './UnAuthedLinks'
import AuthedLinks from './AuthedLinks'
import './nav.css'


function Navbar (props) {
    
    return (
        <nav className='navbar nav-extended is-info'>
            <div className='navbar-brand'>
            <Link className='brand' to='/'>Bookmarks</Link>
            </div>
            <div className='navbar-content'>
                <UnAuthedLinks />
                <AuthedLinks />
            </div>
        </nav>
    )
}

export default Navbar