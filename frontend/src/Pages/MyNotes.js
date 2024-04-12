import './MyNotes.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const MyNotes = () => {
    let [notes, setNotes] = useState([]);
    let useId = JSON.parse(localStorage.getItem('user'))._id;

    const getNotes =async ()=>{
        let result = await fetch(`http://localhost:4500/mynotes/${useId}`,{
            method:'post'
        });
        result = await result.json();
        setNotes(result);
    }
    getNotes();

    const deleteNote =async (id)=>{
        let result = await fetch(`http://localhost:4500/deletenotesadmin/${id}`,{
            method:'delete'
        });
        if(result){console.log("Deleted");}
    }
    
    return (
        <div className='row justify-content-center mynotes-base'>
            <div className='col-md-8 mynotes-base2'>
                <h1 align="center">My Notes</h1>
                {
                    notes.length>0 ? notes.map((item, index) =>
                        <div className='mynotes-notes'>
                            <div className='mynotes-topic'>{ index+1 }. </div>
                            <div className='mynotes-topic'>{ item.topic }  
                            <span className='mynotes-edit'> <Link to={"/editnotesuser/"+item._id}> <i class="fa-solid fa-pen-to-square"></i></Link>  </span>
                            <span onClick={ ()=>deleteNote(item._id) } className='mynotes-delete'><i class="fa-solid fa-trash"></i></span>
                            </div>
                            <div className='mynotes-subtopic'>{ item.subtopic }</div>
                            <div className='mynotes-content'>{ item.content }</div>
                        </div>
                    ):
                    <h1 align="center">Notes Not Found</h1>
                }
            </div>
        </div>
    );
}


export default MyNotes;