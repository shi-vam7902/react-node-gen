const express  = require("express")
const StudentController = require("../controller/StudentController")
const router = express.Router();

router.post("/studs",StudentController.createStudent)
router.get("/studs",StudentController.getAllStudents)
module.exports = router;