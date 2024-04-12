import './AddNotesAdmin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddNotesAdmin = () =>{
    let navigate = useNavigate();
    let [topic,setTopic] = useState("");
    let [subtopic,setSubtopic] = useState("");
    let [content,setContent] = useState("");
    let addby = "admin";
    const addNews =async () =>{
        console.warn(topic,subtopic,content,addby);
        let result = await fetch(`http://localhost:4500/addnotes-admin`,{
            method:'post',
            body:JSON.stringify({topic,subtopic,content,addby}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate('/readnotesadmin');
        }
        // console.log(result);
    }

    return(
        <div className="row justify-content-center">
            <div className='col-md-8 add-notes-admin-main'>
                <h1>Add New Notes</h1>
                <input type="text" placeholder="Enter Topic Of Notes" 
                className='add-notes-admin-input'
                onChange={ (e)=>setTopic(e.target.value) } value={ topic }
                />

                <input type="text" placeholder="Enter Sub-Topic Of Notes" 
                className='add-notes-admin-input'
                onChange={ (e)=>setSubtopic(e.target.value) } value={ subtopic }
                />

                <textarea type="text" placeholder="Enter Content Of Notes" 
                className='add-notes-admin-input'
                onChange={ (e)=>setContent(e.target.value) } value={ content }
                />

                <button className="add-notes-admin-button" onClick={ addNews }>Add Notes</button>
            </div>
        </div>
    );
}

export default AddNotesAdmin;