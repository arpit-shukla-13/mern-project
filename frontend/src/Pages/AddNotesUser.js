import './AddNotesUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddNotesUser = () =>{
    let navigate = useNavigate();
    let [topic, setTopic] = useState("");
    let [subtopic, setSubtopic] = useState("");
    let [content, setContent] = useState("");
    let addby = JSON.parse(localStorage.getItem('user'))._id;

    const addNotes=async () =>{
        console.log(topic,subtopic,content);
        let result = await fetch(`http://localhost:4500/addnotes-admin`,{
            method:'post',
            body:JSON.stringify({topic,subtopic,content,addby}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate('/readnotesuser');
        }
    }
    return(
        <div className='row justify-content-center addnotesuser-base'>
            <div className='col-md-6 align-self-center text-center addnotesuser-main'>
                <h1>Add Your Notes</h1>
                <input type="text" placeholder='Topic of sub notes' className='addnotesuser-input'
                onChange={(e)=>setTopic(e.target.value)} value={ topic } />
               
                <input type="text" placeholder='Write Sub topic' className='addnotesuser-input'
                onChange={(e)=>setSubtopic(e.target.value)} value={ subtopic } />

                <textarea type="text" placeholder='Content of Notes' className='addnotesuser-input'
                onChange={(e)=>setContent(e.target.value)} value={ content } />

                <button className='addnotesuser-button' onClick={ addNotes }>Add Notes</button>
            </div>
        </div>
    );
}

export default AddNotesUser;