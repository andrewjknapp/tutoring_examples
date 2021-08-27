// This is for all actions a user can take
const router = require('express').Router();
const fs = require('fs')
const path = require('path');
const DB_PATH = path.join(__dirname, '..', '..', 'db', 'db.json')

// /api/user/
router.get('/', (req, res) => {
    fs.readFile(DB_PATH, (err, data) => {
        console.log(err)
        console.log(data)
        if (err) {
            res.sendStatus(500);
        }
        res.json(JSON.parse(data))
    })
})

// Figure out how to add user to db
router.post('/addUser', (req, res) => {
    console.log(req.body)
    
    res.sendStatus(200)
})

module.exports = router