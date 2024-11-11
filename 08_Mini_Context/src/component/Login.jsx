import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext) 
    
    const handleClick = (e) =>  {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h1>Login</h1>
            <input
            value={username}
            onChange={e => setusername(e.target.value)}
            placeholder='Enter username'
            />

            <input
            value={password}
            onChange={e => setpassword(e.target.value)}
            placeholder=' Enter password'
            />

            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Login;
