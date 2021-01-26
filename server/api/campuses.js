const { Campus } = require("../db");
const Student = require("../db/student");

const router = require("express").Router();

router.get('/', async (req, res, next) => {
    try {
      const campuses = await Campus.findAll({
          include: [Student]
      });
      res.send(campuses);
    } 
    catch (er) {
      next(er);
    }
});

module.exports = router