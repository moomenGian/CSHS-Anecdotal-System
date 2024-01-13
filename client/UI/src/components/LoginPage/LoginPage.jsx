import './LoginPage.css'
import schoolLogo from '../../assets/school-logo.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

async function handleLogin(username, password, e, setAuthorization) {
    e.preventDefault()

    try{
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })

        if(response.ok){
             console.log('SUCESSFULLY LOGGED IN');
             setAuthorization(true)
        }else{
            console.error(user, pass, 'Invalid user')
        }
    }catch(e){
        console.error(e);
    }
}

function LoginPage() {
    let [username, setUser] = useState('')
    let [password, setPass] = useState('')

    // const {authorized, setAuthorization} = useContext(AuthContext)
    // console.log(authorized);
    const [authorized, setAuthorization] = useState(false)
    if(authorized){
        return <Navigate to={'/'} replace="true"/>
    }
    return (
        <div className='container-fluid backgroundPhoto'>
            <div className='row'>
                <div className='col-md-8 col-sm-7 heading d-flex flex-column justify-content-center align-items-center'>
                    <img alt="school logo" src={schoolLogo} id='schoolLogo'/>
                    <h1>Cainta Senior High School Student Anecdotal System</h1>
                </div>
                <div className='col d-flex'>
                    <div className='d-flex flex-column align-items-center justify-content-center align-self-center login-container'>
                        <p>Log in</p>
                        <Form>
                            <Form.Control required type="text" placeholder="Username" className='userName mb-4 mt-5' onChange={(e) => {setUser(e.target.value)}} />
                            <Form.Control required type="password" placeholder="Password" className='userPass mb-4' onChange={(e) => {setPass(e.target.value)}}/>
                            <Button className='Login' type="submit" 
                                onClick={(e) => {handleLogin(username, password, e, setAuthorization);}}
                            >
                                Log in
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage