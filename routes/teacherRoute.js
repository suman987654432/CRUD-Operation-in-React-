const express = require("express");
const router = express.Router();
const teacherControler = require("../controllers/teacherControllers");
router.get("/home", teacherControler.teacherHomePage);
router.get("/sallary", teacherControler.teachersallaryPage);
router.get("/dept", teacherControler.teacherdeptPage);
router.get("/sub", teacherControler.teachersubPage);

module.exports = router;
  