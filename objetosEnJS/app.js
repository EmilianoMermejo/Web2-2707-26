let alumno = {
    id: 321654321,
    nombre: "Diane",
    primerApellido: "Mata",
    segundoApellido: "Hernández",
    edad: 22,
    titulado: false,
    egresado: {
        estado: true
    },
    domicilio: { 
        calle: {
            nombre: "Encino",
            numero: "24B",
            interior: "2",
            manzana: 7,
            lote: 15
        },
        numero: "25A",
        colonia: "San Pedro",
        CP: "01000",
        alcaldia: "Gustavo A. Madero",
        estado: "CDMX",
        pais: "México",
        continente: "Latinoamérica"
    },
    kinder: {
        nombre: "Aguilera Dorantes",
        actividadPrimerdia: function () {
            console.log("jugar con bloques");
        },
        actividadRecurrente: function () {
            console.log("cantar canciones");
        },
        datosMiss: {
            nombre: "Paloma",
            edad: 29,
            estudios: "Maestría"
        }
    },
    primaria: {
        nombre: "Emiliano Zapata",
        comer(comida) {
            return `ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("Pastel"));

/** 
 * calle
 * numero
 *  interior
 * colonia
 * CP
 * Municipio o Alcaldia
 * estado
 * pais
 * continente
 * 
*/