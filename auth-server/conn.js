import mongoose from "mongoose";

export default async function connect() {
    const URI = process.env.DB_URI + process.env.DB_NAME;
    const db = await mongoose.connect(URI);
    console.log("DB connected.");
    return db;
}