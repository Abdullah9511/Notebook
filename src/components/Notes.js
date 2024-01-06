import React,{useContext} from 'react'
import NoteContext from "../context/notes/NoteContext";
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const{notes,setNotes} = context;
  return (
    
    <div className='container'>
         <h1>Your Notes</h1>
        {notes.map((note)=>{
            return <Noteitem note = {note}/>
        })}
    </div>
  )
}

export default Notes