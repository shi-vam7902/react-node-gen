const StudentSchema = require("../model/StudentModel")
exports.createStudent = (req, res) => {


    console.log("....", req.body)

    const students = new StudentSchema(req.body)

    students.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "something went wrong",
                error:err
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
    StudentSchema.find((err, data) => {
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

exports.deleteById = (req, res) => {
   console.log("indelete by id");
    const id = req.Params.id
    console.log(id);
   
    StudentSchema.findByIdAndDelete(id, (err, data) => {
    
        if (err) {
        console.log(err);
            res.status(500).json({
                message: "Something went Wrong",
              
            })
        }

        else {
            // if (!data == null || !data == undefined) {
            //     res.status(200).json({
            //         message: "Student Deleted",
            //         data: data
            //     })
            // }
            // else {
            //     res.status(404).json({
            //         message: "Data not Found"
            //     })
            // }
            res.status(200).json({
                message:"Data Deleted",
                data:data
                
            })
        }
    })
}

// exports.updateStud = (req, res) => {
//     const id = req.params.id;
//     StudentSchema.findByIdAndUpdate(id, req.body, (err, data) => {
//         if (err) {
//             res.status(500).json({
//                 message: "Error Updating data",
//                 error:err

//             })
//         }
//         else {
//             res.status(200).json({
//                 message:"Record Updated",
//                 data:data
//             })
//         }
//     })
// }