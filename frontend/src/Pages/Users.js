import './Users.css';
import { useState } from 'react';


const Users = () => {
    let [user, setUser] = useState("");

    const getuser = async () => {
        let result = await fetch(`http://localhost:4500/users`);
        result = await result.json();
        setUser(result);
    }
    const deleteUser =async (id) =>{
        let result = await fetch(`http://localhost:4500/deleteuser/${id}`,{
            method:'delete'
        });
        if(result){
            getuser();
        }
    }

    getuser();
    return (
        <div className='row justify-content-center user-base'>
            <div className='col-md-8 user-main'>
                {
                    user.length > 0 ? user.map((item, index) =>
                        <div className='user-user'>
                            <div className='user-name'>{ index+1 }. Name : { item.name } <span className='user-icon' onClick={ ()=>deleteUser(item._id) }><i class="fa-solid fa-trash"></i></span> </div>
                            <div className='user-email'>Email : { item.email }</div>
                            <div className='user-contact'>Contact : { item.contact }</div>
                            <div className='user-address'>Address : { item.address }</div>
                        </div>
                    ):
                    <h1 align='center'>No Data Found</h1>
                }
            </div>
        </div>
    );
}

export default Users;