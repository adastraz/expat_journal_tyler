const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.json({ message: 'users are here'})
})

module.exports = router;