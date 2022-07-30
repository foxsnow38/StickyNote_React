import React, { useContext,useState } from 'react'
    
import MainContext from '../MainContext'

export default function NoteBox() {
    const types = [
        {
            name: `Comment`,
            color: `red`,
            text: `Yorum`
        },
        {
            name: `Hidden-Comment`,
            color: `#999`,
            text: `Gizli Yorum`
        },
        {
            name: `Note`,
            color: `Orange`,
            text: `Not`
        },
    ]
    const { boxPosition ,setMode,notes, setNotes,setBoxVisible} = useContext(MainContext)
const [color,setColor]=useState(types[0].color)
const [note,setNote] = useState(``)
  const changeColor= (e) =>{
      setColor(e.target.value
        )
  }
  const addNote = (e) => {
      const currentNote= {
       
        note: note ,
        color: color ,
        number:notes.length+1,
        position: {
          x: boxPosition.x , y: boxPosition.y
        }
      
      }
     
      setBoxVisible(false)
      setMode(true)
setNotes([...notes,currentNote])
  }
  console.log(note)
    return (
        <div onMouseEnter={() => setMode(false)} onMouseLeave={() => setMode(true)} className="note-box" style={{'--color':color ,position: "absolute", top: boxPosition.y, left: boxPosition.x }}>
            <span className="note-box-number" style={{}}>
{notes.length+1}
            </span>
            <select onChange={changeColor} style={{background:color}}>
                {types.map(t => (<option value={t.color}>{t.text}</option>))}
                
            </select>
            <textarea cols="30" rows="5" onChange={e => setNote(e.target.value)}/>
            <button onClick={addNote} disabled={!note}>Ekle</button>
        </div>
    )
}
