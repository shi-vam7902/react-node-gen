const express = require('express')
const app = express()
const PORT = 9090
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const studentRoute = require("./routes/studentRoutes")
app.use("/students", studentRoute)

const productRoute = require("./routes/productRoutes")
app.use("/products", productRoute)

const departmentRoutes = require('./routes/DepartmentRoutes')
app.use("/departments", departmentRoutes)

const employeeRoutes = require("./routes/EmployeeRoutes")
app.use("/employees", employeeRoutes)

const userRoutes = require("./routes/UserRoutes")
app.use("/users",userRoutes)

const cartRoutes = require("./routes/CartRoutes")
app.use("/carts",cartRoutes)

const uploadRoutes = require("./routes/UploadRoutes")
app.use("/uploads",uploadRoutes)



app.listen(PORT, () => {
    console.log("Server Started on 9090");
})


mongoose.connect("mongodb://localhost:27017/rylMongoGen", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    socketTimeoutMS: 30000,

}, (err) => {
    if (err) {
        console.log("Error Connecting db");
    }
    else {
        console.log("DataBase Connection Established");
    }

})


