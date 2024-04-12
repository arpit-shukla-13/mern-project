import './Signup.css';
import { useState } from 'react';



const Signup = () =>{
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [password, setPassword] = useState("");
    let [address, setAddress] = useState("");

    const newSignup =async () =>{
        console.log(name,email,contact,password,address);
        let result = await fetch(`http://localhost:4500/signup`,{
            method:'post',
            body: JSON.stringify({name,email,contact,password,address}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }

    return(
        <div className='row justify-content-center signup-main'>
            <div className='col-md-6 signup-body'>
                <h1 align="center">User Registration</h1>
                <input type="text" placeholder='Enter your full Name' className='signup-input' 
                onChange={(e)=>setName(e.target.value)} value={ name } required
                />
                <input type="email" placeholder='Enter your Email' className='signup-input'
                onChange={(e)=>setEmail(e.target.value)} value={ email } required
                />
                <input type="number" placeholder='Enter your Contact' className='signup-input signup-contact'
                onChange={(e)=>setContact(e.target.value)} value={ contact } required
                /> 
                <input type="password" placeholder='Enter your Password' className='signup-input'
                onChange={(e)=>setPassword(e.target.value)} value={ password } required
                />
                <input type="text" placeholder='Enter your Address' className='signup-input'
                onChange={(e)=>setAddress(e.target.value)} value={ address } required
                />
                <button onClick={ newSignup } className='signup-button'>Signup</button>
            </div>
        </div>
    );
}

export default Signup;