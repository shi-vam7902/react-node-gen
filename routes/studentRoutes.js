const express  = require("express")
const StudentController = require("../controller/StudentController")
const router = express.Router();

router.post("/studs",StudentController.createStudent)
console.log("in router link called");
router.get("/studs",StudentController.getAllStudents)
router.delete('/studs/:id',StudentController.deleteById)
router.put("/studs/:id",StudentController.updateStud)
router.get("/studs/:id",StudentController.getStudById)
module.exports = router;
