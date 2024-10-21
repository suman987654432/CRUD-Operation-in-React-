const express = require("express");
const router = express.Router();
const stuControllers = require("../controllers/studentControllers");

router.get("/home", stuControllers.stuHomePage);
router.get("/about", stuControllers.stuAboutPage);
router.get("/contact", stuControllers.stuContactPage);
router.get("/display", stuControllers.stuDisplayPage);
router.get("/insert", stuControllers.stuInsertPage);
router.get("/search", stuControllers.stuSearchPage);
router.get("/update", stuControllers.stuUpdatePage);
router.post("/datasave", stuControllers.dataSave);
router.post("/delete/:id", stuControllers.deleteData);
router.get("/edit/:id", stuControllers.editData);
router.post("/update/:id", stuControllers.updateData);

module.exports = router;
