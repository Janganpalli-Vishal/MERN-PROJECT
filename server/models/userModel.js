import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password length should be greater than 6"]
    },
    batch : {
        type: Number,
        required:[true,"Provide batch number"]
    }

},
    { timestamps: true }
)

export default mongoose.model('user', userSchema)