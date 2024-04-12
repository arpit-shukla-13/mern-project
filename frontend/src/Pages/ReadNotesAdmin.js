import './ReadNotesAdmin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ReadNotesAdmin = () =>{
    let [notes, setNotes] = useState([]);

    const readNews =async () =>{
        let result = await fetch(`http://localhost:4500/readnotesadmin`);
        result = await result.json();
        setNotes(result);
        // console.log(result);
    }
    readNews();

    const deleteNoteAdmin =async (id)=>{
        let result = await fetch(`http://localhost:4500/deletenotesadmin/${id}`,{
            method:'delete'
        });
        if(result){console.log("Deleted");}
    }

    return(
        <div className='row justify-content-center'>
            <div className='col-md-9'>
                {
                    notes.map((item,index)=>
                        <div className='readnoteadmin-main'>
                            <li className='readnoteadmin-index'>{ index+1 } : </li>
                            <li className='readnoteadmin-heading'><u>{item.topic}</u>
                                <div className='readnoteadmin-icon'>
                                    <Link to={"/editnotesadmin/"+item._id}> <i class="fa-solid fa-pen-to-square"></i> </Link>
                                    <button onClick={() => deleteNoteAdmin(item._id)} className='btn btn-danger btn-sm'> <i class="fa-solid fa-trash-can"></i> </button>
                                </div>
                            </li>
                            <div className='readnoteadmin-subheading'>Sub-Heading : {item.subtopic}</div>
                            <div className='readnoteadmin-content'>Content : {item.content}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ReadNotesAdmin;