import './Navbar.css'
import schoolLogo from '../../assets/school-logo.png'
import settingsLogo from '../../assets/image 6.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <img className='school-logo' src={schoolLogo} alt="school logo"/>
                <div className="links">
                    <a href="#" className='btn'>DASHBOARD</a>
                    <Link to={'/'} className='btn'>
                        RECORDS
                    </Link>
                </div>

                
                <div className='footer'>
                    <a href="#" className='btn'>Log-in</a>
                    <a href="#">
                        <img src={settingsLogo} alt="school logo"/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar