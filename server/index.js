const express = require('express')

const bodyparser = require('body-parser')

const cors = require('cors')

const app = express()

// Middleware (for dependencies)
app.use(bodyparser.json())
app.use(cors())

const posts = require('./routes/api/posts')

app.use('/api/posts', posts) 

const port = 5000

app.listen(port, () => console.log(`Server is listening on port ${port}`))

