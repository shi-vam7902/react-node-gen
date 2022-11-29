const mongoose = require('mongoose')
const schema = mongoose.Schema
const studentSchema =  schema(
    {
        sname: {
            type: String
        },
        semail: {
            type: String
        },
        sage: {
            type: Number
        },
        sstatus: {
            type: Boolean
        }
    }
)

module.exports = mongoose.model("students",studentSchema)