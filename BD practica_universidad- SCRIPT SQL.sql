#Creación Base de Datos
CREATE DATABASE practica_estudiante;

CREATE TABLE Estudiante (
    CodEstudiante INT(11) PRIMARY KEY,
    Nombre VARCHAR(70) NOT NULL,
    FechaNac DATE NOT NULL,
    Direccion VARCHAR(150) NOT NULL,
    Email VARCHAR(200) NOT NULL,
    Genero CHAR(1) NOT NULL
);

CREATE TABLE director(

CodDirector INT(11) PRIMARY KEY,
Nombre VARCHAR(80) NOT NULL,
Profesion VARCHAR(40)
);

CREATE TABLE Carrera(
    CodCarrera INT(11) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Duracion TINYINT(4) NOT NULL,
    Modalidad VARCHAR(50) NOT NULL,
    FkCodDirector INT(11) NOT NULL,
    FOREIGN KEY (FkCodDirector) REFERENCES director (CodDirector)

);

CREATE TABLE Practica (
    IdContrato INT(11) NOT NULL PRIMARY KEY,
    Lugar VARCHAR(70) NOT NULL,
    FechaIni DATE NOT NULL,
    FechaFin DATE NOT NULL,
    Nota FLOAT(11) NOT NULL,
    Modalidad CHAR(1),
    FkCodEstudiante INT(11) 
    FkCodCarrera INT(11)

);


