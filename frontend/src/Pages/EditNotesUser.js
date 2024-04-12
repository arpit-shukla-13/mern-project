import './EditNotesUser.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditNotesUser = ()=>{
    let params = useParams();
    let navigate = useNavigate();
    let [topic,setTopic] = useState("");
    let [subtopic,setSubtopic] = useState("");
    let [content,setContent] = useState("");
    let addby = JSON.parse(localStorage.getItem('user'))._id;
    useEffect(()=>{
        getNotesAdmin();
    },[]);

    const getNotesAdmin =async ()=>{
        let result = await fetch(`http://localhost:4500/getnotesadmin/${params.key}`);
        result = await result.json();
        setTopic(result.topic);
        setSubtopic(result.subtopic);
        setContent(result.content);
        console.log(result);
    }

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
            navigate('/mynotes');
        }
    }

    return(
        <div className='row justify-content-center editnotesuser-base'>
            <div className='col-md-7 editnotesuser-main'>
                <h1 align='center'>Edit Notes</h1>
                <input type='text' className='editnotesuser-input'
                onChange={(e)=>setTopic(e.target.value)} value={ topic } />

                <input type='text' className='editnotesuser-input'
                onChange={(e)=>setSubtopic(e.target.value)} value={ subtopic } />

                <input type='text' className='editnotesuser-input'
                onChange={(e)=>setContent(e.target.value)} value={ content } />

                <button onClick={ updateNotesAdmin } className='editnotesuser-button'>Update Notes</button>
            </div>
        </div>
    );
}


export default EditNotesUser;