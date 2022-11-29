const StudentSchema = require("../model/StudentModel")
exports.createStudent = (req, res) => {
 

    console.log("....",req.body)
    
    const students = new StudentSchema(req.body)

    students.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "something went wrong"
            })
        }
        else {
            console.log(data);
            res.status(201).json({
                message: "Student Added Succesfully",
                data: data
            })
        }

    })
}
exports.getAllStudents = (req, res) => {
    StudentSchema.find((err,data)=>{
        if (err) {
            res.status(500).json({
                message: "something went wrong"
            })
        }
        else {
            console.log(data);
            res.status(201).json({
                message: "data Retrived",
                data: data
            })
        }
    })
}