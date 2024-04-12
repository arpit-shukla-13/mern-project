import './UserLogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () =>{
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    const userLogin =async () =>{
        let result = await fetch(`http://localhost:4500/userlogin`,{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result.email){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/userhome');
        }else{
            alert("Enter Correct Detail");
        }
        
    }
    return(
        <div className='row justify-content-center userlogin-base'>
            <div className='col-md-6 align-self-center userlogin-main'>
                <h1 align="center">User Login</h1>
                <input type="text" placeholder='Enter your email' className='userlogin-input'
                onChange={(e)=>setEmail(e.target.value)} value={ email } />
                <input type="password" placeholder='Enter your password' className='userlogin-input'
                onChange={(e)=>setPassword(e.target.value)} value={ password } />
                <button onClick={ userLogin } className='userlogin-button'>Login</button>
            </div>
        </div>
    );
}

export default UserLogin;