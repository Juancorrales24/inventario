/* importamos al framework express */
import express from "express";

/* asignamos a app toda funcionalidad para mi server web */
const app = express(); 

/* setear un puerto a mi web server */
app.set("port",5000)

/* Hacemos disponible a mi web server app para toda la aplicación */
export default app;