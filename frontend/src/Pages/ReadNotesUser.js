import './ReadNotesUser.css';
import './ReadNotesUser';
import { useState, useEffect } from 'react';


const ReadNotesUser = () => {
    let [notes, setNotes] = useState("");
    useEffect(() => {
        allNotes();
    }, []);

    const allNotes = async () => {
        let result = await fetch(`http://localhost:4500/readnotesuser`);
        result = await result.json();
        setNotes(result);
    }
    const search = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/search/${key}`);
            result = await result.json();
            if (result) {
                setNotes(result);
            } else {
                allNotes();
            }
        }else{
            allNotes();
        }
    }

    return (
        <div className="row justify-content-center readnotesuser-base2">
            <div className="col-md-8 readnotesuser-base">
                <input type='search' onChange={search} className='readnotesuser-search' placeholder='Search by topci...' />
                {
                    notes.length > 0 ? notes.map((item, index) =>
                        <div className='readnotesuser-main'>
                            <div className='readnotesuser-topic'> {index + 1}.</div>
                            <div className='readnotesuser-topic'> {item.topic}</div>
                            <div className='readnotesuser-subtopic'> {item.subtopic}</div>
                            <div className='readnotesuser-content'> {item.content}</div>
                        </div>
                    ) :
                        <h1 align="center">No Data Found</h1>
                }
            </div>
        </div>
    );
}

export default ReadNotesUser;