const employeeSchema = require('../model/EmployeeModel')
exports.addEmployee = (req,res)=>{
    const employee = new employeeSchema(req.body)
    employee.save((err,data)=>
    {
        if(err)
        {
            res.status(500).json({
                Message:"SMWW"
            })
        }
        else
        {
            res.status(200).json({
                message:"Employee Created",
                data:data
            })
        }
    })
}
exports.getAllEmployees = (req,res)=>{
    employeeSchema.find().populate('departments').exec((err,data)=>{
        if(err)
        {
            console.log(err);
            res.status(200).json({
                message:"SomeThing went Wrong",
                data:data
            })
        }
    })
}