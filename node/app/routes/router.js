const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3005;

const tables = [ 'company', 'developer', 'games', 'genre' ];

router.get('/', (req, res)=> {
    res.json({
        'All Companies': `http://localhost:${port}/api/company`,
        'All Developers': `http://localhost:${port}/api/developer`,
        'All Games': `http://localhost:${port}/api/games`,
        'All Genres': `http://localhost:${port}/api/genre`
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

// .get()
router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.send('404 no no no 404')
    }
})

module.exports = router