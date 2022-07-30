
import { useRef, useEffect, useState } from 'react';
import './App.scss';
import LeaveCommentText from './components/LeaveCommentText';
import Note from './components/Note';
import MainContext from './MainContext';
import NoteBox from './components/NoteBox';

function App() {


  const screen = useRef()
  const [mode, setMode] = useState(true)
  const [position, setPosition] = useState({
    x: 0, y: 0
  })
  const [notes, setNotes] = useState(localStorage.notes && JSON.parse(localStorage.notes) || [])
  const [boxPosition, setBoxPosition] = useState({
    x: 0, y: 0
  })
  const [boxVisible, setBoxVisible] = useState(false)
  const data = { position, boxVisible, boxPosition,setMode,notes,setNotes,setBoxVisible,notes}
  useEffect(() => {
    screen.current.focus()
  }, [])

useEffect(() => {
  localStorage.setItem('notes', JSON.stringify(notes))
    
} , [notes])

  const handleKeyUp = (e) => {
    if (e.key === 'c') {
      setMode(!mode)
      setBoxVisible(false)
    }
  }
  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY })
  }

  const handleClick = (e) => {
if (mode){
    setBoxPosition({ x: position.x, y: position.y })
    setBoxVisible(true)
  }}
  return (
    <MainContext.Provider value={data} >
      
      <div ref={screen} tabIndex={0}  onMouseMove={handleMouseMove} onClick={handleClick} onKeyUp={handleKeyUp} className={`screen ${mode && `editable`} `}>
        {mode && (<div>Yorum Modu Aktif </div>)}
        {mode && <LeaveCommentText />}

        {notes && notes.map(note => <Note note={note} />)}
        {boxVisible && <NoteBox />}

      </div>
    </MainContext.Provider>
  );
}

export default App;
