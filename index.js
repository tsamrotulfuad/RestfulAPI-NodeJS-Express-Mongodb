import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/restful_db");
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen('3000', () => console.log('Server Running at port : 3000'));
