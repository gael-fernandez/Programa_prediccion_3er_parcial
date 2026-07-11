import { Schema, model } from "mongoose";

const Esqueleto_de_materia = new Schema({
    parcial1: Number,
    parcial2: Number,
    parcial3Predicho: Number,
    promedioMateria: Number
}, { _id: false });

const Esqueleto_de_alumno = new Schema({
    Nombre: String,
    Matricula: String,
    Carrera: String,
    Materias: {
        VisionPorComputadora: Esqueleto_de_materia,
        MachineLearning: Esqueleto_de_materia,
        Ingles: Esqueleto_de_materia,
        MineriaDeDatos: Esqueleto_de_materia,
        ProyectoIntegrador: Esqueleto_de_materia
    },
    Promedio: Number,
    Media: Number,
    Rango: Number,
    Status: Boolean
})

export const Alumno = new model("Tabla de prediccion de calificaciones", Esqueleto_de_alumno)
