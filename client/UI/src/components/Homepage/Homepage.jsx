import './Homepage.css'
import Navbar from '../Navbar/Navbar'
import SectionsPage from '../SectionsPage/SectionsPage'
import { AuthContext, useAuthContext } from '../../Hooks/AuthContext' 
import { useContext } from 'react'

function Homepage() {
    console.log(useAuthContext(AuthContext));
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 px-0">
                        <Navbar />
                    </div>
                    <div className="col-11 px-0">
                        <SectionsPage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage