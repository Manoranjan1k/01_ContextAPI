import { useState, useContext } from 'react'
import UserContext from '../context/UseContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setUser({username, password})
    }
  return (
    <div className='bg-red-500'>
    <h2>Login</h2>
    <input className='m-4 outline-none rounded-sm' type='text'
    value={username}
    onChange={(e) => setUsername(e.target.value) }
    placeholder='username'  />
    {" "}
    <input className='m-4 outline-none rounded-sm' type='text' 
    value={password}
    onChange={(e) => setPassword(e.target.value) }
    placeholder='password'  />
    <button className='rounded bg-green-500 hover:bg-orange-300' onClick={handleSubmit}>Submit</button>
</div>
  )
}

export default Login