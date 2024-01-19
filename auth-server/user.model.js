import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already in"]
    },
    email: {
        type: String,
        equired: [true, "email is required"],
        unique: [true, "email already in"]
    },
    password: {
        type: String,
        equired: [true, "password is required"]
    }
});

export default mongoose.model.Users || mongoose.model("User", schema);