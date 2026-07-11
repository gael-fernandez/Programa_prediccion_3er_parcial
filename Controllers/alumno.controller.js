import { Alumno } from "../Models/alumno.model.js";

const nombresDeMaterias = ["VisionPorComputadora", "MachineLearning", "Ingles", "MineriaDeDatos", "ProyectoIntegrador"];

const alumnosBase = [
    { nombre: "Oziel", matricula: "utm240695", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [9.8, 9.5], MachineLearning: [8.7, 9.0], Ingles: [7.5, 8.0], MineriaDeDatos: [9.2, 9.4], ProyectoIntegrador: [9.6, 9.7] } },
    { nombre: "Valentin", matricula: "utm240701", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [8.5, 8.2], MachineLearning: [9.1, 9.3], Ingles: [8.8, 8.6], MineriaDeDatos: [7.9, 8.1], ProyectoIntegrador: [8.9, 9.0] } },
    { nombre: "Jessica", matricula: "utm240712", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [7.2, 7.8], MachineLearning: [6.5, 7.0], Ingles: [8.9, 9.1], MineriaDeDatos: [7.0, 6.8], ProyectoIntegrador: [7.6, 7.9] } },
    { nombre: "Carlos", matricula: "utm240733", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [6.5, 6.0], MachineLearning: [5.8, 5.5], Ingles: [7.0, 6.7], MineriaDeDatos: [6.2, 5.9], ProyectoIntegrador: [6.8, 6.5] } },
    { nombre: "Maria", matricula: "utm240745", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [9.5, 9.8], MachineLearning: [9.6, 9.9], Ingles: [9.0, 9.2], MineriaDeDatos: [9.4, 9.6], ProyectoIntegrador: [9.7, 9.9] } },
    { nombre: "Diego", matricula: "utm240756", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [7.8, 7.5], MachineLearning: [8.0, 7.7], Ingles: [6.9, 7.1], MineriaDeDatos: [7.4, 7.2], ProyectoIntegrador: [7.6, 7.4] } },
    { nombre: "Paula", matricula: "utm240767", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [8.9, 9.1], MachineLearning: [8.4, 8.6], Ingles: [9.3, 9.5], MineriaDeDatos: [8.7, 8.9], ProyectoIntegrador: [8.8, 9.0] } },
    { nombre: "Ricardo", matricula: "utm240778", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [5.5, 5.0], MachineLearning: [6.0, 5.6], Ingles: [6.2, 6.0], MineriaDeDatos: [5.8, 5.4], ProyectoIntegrador: [6.1, 5.8] } },
    { nombre: "Fernanda", matricula: "utm240789", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [8.1, 8.4], MachineLearning: [7.9, 8.2], Ingles: [8.5, 8.7], MineriaDeDatos: [8.0, 8.3], ProyectoIntegrador: [8.2, 8.5] } },
    { nombre: "Emiliano", matricula: "utm240790", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [9.0, 8.7], MachineLearning: [8.8, 8.5], Ingles: [7.6, 7.4], MineriaDeDatos: [8.3, 8.0], ProyectoIntegrador: [8.6, 8.3] } },
    { nombre: "Sofia", matricula: "utm240801", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [6.8, 7.2], MachineLearning: [7.0, 7.5], Ingles: [7.8, 8.0], MineriaDeDatos: [6.9, 7.3], ProyectoIntegrador: [7.1, 7.5] } },
    { nombre: "Alejandro", matricula: "utm240812", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [9.3, 9.6], MachineLearning: [9.5, 9.7], Ingles: [8.2, 8.4], MineriaDeDatos: [9.1, 9.3], ProyectoIntegrador: [9.4, 9.6] } },
    { nombre: "Camila", matricula: "utm240823", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [7.5, 7.1], MachineLearning: [6.8, 6.4], Ingles: [7.2, 6.9], MineriaDeDatos: [7.0, 6.6], ProyectoIntegrador: [7.3, 6.9] } },
    { nombre: "Luis", matricula: "utm240834", carrera: "Ing. en Sistemas Computacionales", calificaciones: { VisionPorComputadora: [8.6, 8.9], MachineLearning: [8.3, 8.6], Ingles: [8.9, 9.1], MineriaDeDatos: [8.5, 8.8], ProyectoIntegrador: [8.7, 9.0] } },
    { nombre: "Alan", matricula: "utm240845", carrera: "Ing. en Tecnologias de la Informacion", calificaciones: { VisionPorComputadora: [5.8, 6.3], MachineLearning: [6.2, 6.7], Ingles: [6.5, 7.0], MineriaDeDatos: [6.0, 6.5], ProyectoIntegrador: [6.3, 6.8] } }
];

const predecirTercerParcial = (parcial1, parcial2) => {
    let prediccion = parcial2 + (parcial2 - parcial1);

    if (prediccion > 10) prediccion = 10;
    if (prediccion < 0) prediccion = 0;

    return Math.round(prediccion * 10) / 10;
}

export const sembrarAlumnos = async () => {

    for (let i = 0; i < alumnosBase.length; i++) {
        const alumno = alumnosBase[i];

        const materiasCalculadas = {};
        let sumaDePromedios = 0;
        let notaMasAlta = 0;
        let notaMasBaja = 10;

        for (let j = 0; j < nombresDeMaterias.length; j++) {
            const nombreMateria = nombresDeMaterias[j];

            const parcial1 = alumno.calificaciones[nombreMateria][0];
            const parcial2 = alumno.calificaciones[nombreMateria][1];
            const parcial3 = predecirTercerParcial(parcial1, parcial2);
            const promedioMateria = Math.round(((parcial1 + parcial2 + parcial3) / 3) * 10) / 10;

            materiasCalculadas[nombreMateria] = {
                parcial1: parcial1,
                parcial2: parcial2,
                parcial3Predicho: parcial3,
                promedioMateria: promedioMateria
            };

            sumaDePromedios = sumaDePromedios + promedioMateria;

            if (promedioMateria > notaMasAlta) notaMasAlta = promedioMateria;
            if (promedioMateria < notaMasBaja) notaMasBaja = promedioMateria;
        }

        const promedioGeneral = Math.round((sumaDePromedios / nombresDeMaterias.length) * 10) / 10;
        const rango = Math.round((notaMasAlta - notaMasBaja) * 10) / 10;
        const status = promedioGeneral >= 7.0;

        await Alumno.create({
            Nombre: alumno.nombre,
            Matricula: alumno.matricula,
            Carrera: alumno.carrera,
            Materias: materiasCalculadas,
            Promedio: promedioGeneral,
            Media: promedioGeneral,
            Rango: rango,
            Status: status
        });
    }

    console.log("Se guardaron los 15 alumnos con su prediccion del tercer parcial");
}

export const test = () => console.log("Llamando el controlador a app");