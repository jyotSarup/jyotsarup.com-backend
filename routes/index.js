const express = require('express')
const router = express.Router()

router.use('/contactMe', require('./contactMe'))

module.exports = router