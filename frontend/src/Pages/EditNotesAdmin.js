import './EditNotesAdmin.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const EditNotesAdmin = () =>{
    let params = useParams();
    let navigate = useNavigate();
    let [topic,setTopic] = useState("");
    let [subtopic,setSubTopic] = useState("");
    let [content,setContent] = useState("");
    useEffect(()=>{
        getNotesAdmin();
    },[]);
    
    const getNotesAdmin =async ()=>{
        let result = await fetch(`http://localhost:4500/getnotesadmin/${params.key}`);
        result = await result.json();
        setTopic(result.topic);
        setSubTopic(result.subtopic);
        setContent(result.content);
        console.log(result);
    }

    let addby = "admin";
    const updateNotesAdmin =async ()=>{
        let result = await fetch(`http://localhost:4500/editnotesadmin/${params.key}`,{
            method:'put',
            body: JSON.stringify({topic,subtopic,content,addby}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate('/readnotesadmin');
        }
    }
    
    return(
        <div className="row justify-content-center">
            <div className='col-md-8 text-center editnotesadmin-main'>
                <h1 align="center">Edit Notes Admin</h1>
                <input type="text" className='editnotesadmin-input'
                onChange={(e)=>setTopic(e.target.value)} value={topic}
                />
                <input type="text" className='editnotesadmin-input'
                onChange={(e)=>setSubTopic(e.target.value)} value={subtopic}
                />
                <textarea type="text" className='editnotesadmin-input'
                onChange={(e)=>setContent(e.target.value)} value={content}
                />
                <button onClick={ updateNotesAdmin } className='editnotesadmin-button'>Update Notes</button>
            </div>
        </div>
    );
}

export default EditNotesAdmin;