const router = require('express').Router();
const path = require('path');

router.get('/hi', (req, res) => {
    res.send("hi");
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})




module.exports = router;