let opci = prompt(`
        Elija una opcion:
        1.- Libros
        2.- Peliculas
        3.- Juegos
    `);

    switch(opci){
        case "1":
            console.log("Principito");
            break;
        case "2":
            console.log("Cars");
            break;
        case "3":
            console.log("Sonic");
            break;
        default:
            console.log("No valido");
            break;
    }