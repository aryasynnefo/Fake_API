import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connect from "./conn.js";
import router from "./router.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());



app.use("/api",router);

connect().then(() => {
    app.listen(PORT,() => {
        console.log(`Server started on port: ${PORT}`);
    })
})
.catch(error => {
    console.log(error);
})