const express = require('express')

const { gradeController } = require('../controllers')

const router = express.Router()

router.post('/grade', gradeController.postGrade)

module.exports = router