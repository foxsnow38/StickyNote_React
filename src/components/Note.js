import React, { useContext, useState } from 'react'
import Draggable from 'react-draggable';
import MainContext from '../MainContext';


export default function Note({note}) {
    const {setMode} =useContext(MainContext)
  const [visible,setVisible] = useState(false)
  const [clickable,setClickable]= useState(false)
  const showNote = () => {
      if (clickable) {
     setVisible(!visible)
    }
  }
    return (
      <Draggable  onDrag={()=> {setClickable(false)}}  onStart={()=> {  setTimeout(setClickable(true),500)  }} defaultPosition={{x: note.position.x, y: note.position.y}} >
            <div  className={`note-container`} style={{background:note.color,color: `#fff` , position:'absolute' , top:0, left: 0 }}>
           <span onClick={showNote} className="note-box-number" style={{"--color":note.color}}>
{note.number}
            </span>
            <div className="note" style={{display : visible ? 'flex': 'none'}}>
                {note.note}
            </div>
        </div>
      </Draggable>
    )
}
