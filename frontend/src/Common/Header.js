import './Header.css';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const admin = localStorage.getItem('admin');
    const user = localStorage.getItem('user');
    const navigate = useNavigate();
    let my_name = "";
    try{
        my_name = JSON.parse(localStorage.getItem('user')).name;
    }catch{my_name=""}
    const logout = () => {
        localStorage.clear();
        navigate('/adminlogin');
    }
    return (
        <div className='header-main-div'>
            {
                admin ?
                    <ul className="header-menu-items">
                        <li><Link to='/adminhome'>Home</Link></li>
                        <li><Link to='/addnotes'>Add Notes</Link></li>
                        <li><Link to='/readnotesadmin'>Read Notes</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                        <li><Link to="/adminlogin" onClick={logout}>Logout</Link></li>
                    </ul> 

                : user ?
                    <ul className='header-menu-items'>
                        <li><Link to='/userhome'>Home</Link></li>
                        <li><Link to='/addnotesuser'>Add Notes</Link></li>
                        <li><Link to='/readnotesuser'>Notes</Link></li>
                        <li><Link to='/mynotes'>My Notes</Link></li>
                        <li><Link to='/edituser'> <i class="fa-solid fa-user-pen"></i> </Link></li>
                        <li><Link to="/userlogin" onClick={ logout }><i class="fa-solid fa-right-from-bracket fa-fade"></i> ({my_name})</Link></li>
                    </ul>

            :
            <ul className='header-menu-items'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/adminlogin'>Admin Login</Link></li>
                <li><Link to='/userlogin'>User Login</Link></li>
            </ul>
            }

        </div>
    );
}

export default Header;