import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import NoteForm from './Pages/NoteForm'
import NotFound from './Pages/NotFound'


function App() {
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [notes, setNotes] = useState([])
  const [editNote, setEditNote] = useState(null)

  return (
    <>
      <Header setShowNoteForm={setShowNoteForm} />

      {showNoteForm &&
        <NoteForm
          editNote={editNote}
          setEditNote={setEditNote}
          setShowNoteForm={setShowNoteForm}
          setNotes={setNotes} />}

      <Routes>
        <Route path='/'
          element={
            <Home
              setShowNoteForm={setShowNoteForm}
              setEditNote={setEditNote}
              notes={notes}
              setNotes={setNotes} />} />

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  )
}

export default App
