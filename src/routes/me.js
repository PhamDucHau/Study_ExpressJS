const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/MeController')

// newsController.index

router.get('/stored/courses', meController.storedCourses)

// router.get('/', CourseController.index)




module.exports = router