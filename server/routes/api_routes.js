const router = require('express').Router()
const {createNote, getNotes, oneNote, updateNote, deleteNote} = require('../controllers/api_controller')

// Create Note
router.post('/notes', createNote )

// Get All Notes
router.get('/notes', getNotes)

// Get One Note By ID
router.get('/note/:id', oneNote)

// Update Note
router.put('/note/:id', updateNote)

// Delete Note
router.delete('/note/:id', deleteNote)

module.exports = router