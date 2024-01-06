import {  useState } from "react"
import NoteContext from "./NoteContext"


const NoteState = (props) =>{
    
    const notesInitial = [
        {
          "_id": "65987a0ffcdd394ce25c3716",
          "user": "65974b170898b413a493ebbb",
          "title": "My title",
          "description": "khana kha lia ha",
          "tag": "Personal",
          "timestamp": "2024-01-05T21:52:15.513Z",
          "__v": 0
        }
      ]
      
      const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState;