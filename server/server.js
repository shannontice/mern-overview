const express = require('express');
const db = require('./config/connection')
const app= express();
const PORT = process.env.PORT || 3333;

// Import routes
const api_routes = require('./routes/api_routes')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/dist'))
}

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index/html'))
})

// Open Middleware
app.use(express.json());

// Load Routes
app.use('/api', api_routes)

db.on('open', () => {
    app.listen(PORT, () => console.log('Server started on', PORT))
})
