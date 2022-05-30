const router = require('express').Router()
const student = require('../controllers/student')

router.post('/register', student.register)
router.post('/login', student.login)

module.exports = router