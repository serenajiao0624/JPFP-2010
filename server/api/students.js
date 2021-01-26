const Student = require('../db/student')
const Campus = require('../db/campus')

const router = require('express').Router()


router.get('/', async (req, res, next) => {
    try {
      const students = await Student.findAll({
          include: [Campus]
      });
      res.send(students);
    } 
    catch (er) {
      next(er);
    }
});

module.exports = router