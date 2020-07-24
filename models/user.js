const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
      type: String
    },
    DOB: {
        date: {
            type: String,
            //required: true
        },
        month: {
            type: String,
            //required: true
        },
        year: {
            type: String,
            //required: true
        }
    },
    gender: {
        type: String,
        //required: true
    },
    department: {
        type: String,
        //required: true
    },
    yearOfGraduation: {
        type: Number,
        //required: true
    },
    //the courses enrolled in by the user
    courses: [
        {
            course: {
                type: Schema.Types.ObjectId,
                ref: "Course",
                //required: true
            }
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
