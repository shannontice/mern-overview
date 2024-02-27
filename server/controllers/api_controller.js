const Note = require('../models/Note')

module.exports = {
    async createNote(req, res) {
        const note = await Note.create(req.body)

        res.json(note)
    },

    async getNotes(req, res) {
        const notes = await Note.find();

        res.json(notes)
    },

    async oneNote(req, res) {
        const note_id = req.params.id

        const note = await Note.findById(note_id)

        res.json(note)
    },

    // async updateNote(req, res) {
    //     const updatedNote = await Note.findOneAndUpdate({
    //         _id: req.body.note_id
    //     }, {
    //         text: req.body.text
    //     }, { new: true })

    //     res.json(updatedNote)
    // },

    async updateNote(req, res) {
        const { id } = req.params; // Get the _id from the request parameters
        const { text } = req.body; // Get the updated text from the request body
    
        try {
            const updatedNote = await Note.findOneAndUpdate(
                { _id: id }, // Find the note by _id
                { $set: { text: text } }, // Update the text field
                { new: true } // Return the updated document
            );
    
            if (!updatedNote) {
                return res.status(404).json({ message: 'Note not found' });
            }
    
            res.json(updatedNote);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    

    async deleteNote(req, res) {
        const note_id = req.params.id

        await Note.deleteOne(note_id)

        res.json({
            message: 'Note deleted!'
        })

    }
}