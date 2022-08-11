import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
