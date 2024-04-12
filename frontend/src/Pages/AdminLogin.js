import './AdminLogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    let username = email;
    const adminLoginHandler = async () => {
        console.log(username, password);
        let result = await fetch("http://localhost:4500/login", {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result.username) {
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/adminhome');
        } else {
            alert("Enter Correct Detail");
        }
    }
    return (
        <div className="row justify-content-center adminlogin-main-div">
            <div className='col-md-6 align-self-center adminlogin-main'>
                <h1>Admin Login</h1>
                <input type="text" placeholder="Enter Your Email" className="adminlogin-input-box"
                    onChange={(e) => setEmail(e.target.value)} value={email}
                />
                <input type="password" placeholder="Enter Your Password" className="adminlogin-input-box"
                    onChange={(e) => setPassword(e.target.value)} value={password}
                />
                <button onClick={adminLoginHandler} className="adminlogin-button">Login</button>
            </div>
        </div>
    );
}

export default AdminLogin;