import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sembrarAlumnos, test } from "./Controllers/alumno.controller.js";

dotenv.config();

mongoose.connect(process.env.url)

.then(() => console.log("Todo jala chido en la base de datos"))
.catch((error) => console.log("no jalo :("))
const app = express();


app.use(cors());
app.listen(4000, () => console.log("Esta jalando , no escucha borroso"))
test();
sembrarAlumnos();
