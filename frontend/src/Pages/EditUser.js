import './EditUser.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EditUser = () =>{
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [password,setPassword] = useState("");
    let [address,setAddress] = useState("");
    useEffect(()=>{
        getUser();
    },[]);

    let id = JSON.parse(localStorage.getItem('user'))._id;
    const getUser =async ()=>{
        let result = await fetch(`http://localhost:4500/getuser/${id}`,{
            method:'post'
        });
        result = await result.json();
        setName(result.name);setEmail(result.email);setContact(result.contact);
        setPassword(result.password);setAddress(result.address);
    }
    
    const update =async () =>{
        let result = await fetch(`http://localhost:4500/updateuser/${id}`,{
            method:'post',
            body: JSON.stringify({name,email,contact,password,address}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(result){
            navigate('/userhome');
        }
    }
    return(
        <div className="row justify-content-center edituser-base">
            <div className='col-md-6 align-self-center edituser-main'>
                <h1>Edit Your Detail</h1>
                <input type="text" className='edituser-input'
                onChange={(e)=>setName(e.target.value)} value={ name } />

                <input type="text" className='edituser-input'
                onChange={(e)=>setEmail(e.target.value)} value={ email } readOnly />

                <input type="text" className='edituser-input'
                onChange={(e)=>setContact(e.target.value)} value={ contact } />

                <input type="text" className='edituser-input'
                onChange={(e)=>setPassword(e.target.value)} value={ password } placeholder='Enter new Password' />

                <input type="text" className='edituser-input'
                onChange={(e)=>setAddress(e.target.value)} value={ address } />
                <button className='edituser-button' onClick={ update }>Update</button>
            </div>
        </div>
    );
}

export default EditUser;