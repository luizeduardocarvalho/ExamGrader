const express = require('express')

const { gradeController } = require('../controllers')

const router = express.Router()

router.post('/grade/pet', gradeController.postPetGrade);
router.post('/grade/fce', gradeController.postFceGrade);

module.exports = router