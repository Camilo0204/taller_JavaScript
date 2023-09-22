function aleatorio(eleccionUsuario) {
    // aqui Obtengo la elección del programa de forma aleatoria
    const opciones = ['piedra', 'papel', 'tijera'];
    const indicePrograma = Math.floor(Math.random() * 3);
    const eleccionPrograma = opciones[indicePrograma];

    //aqui Determino el resultado del juego 
    if (eleccionUsuario === eleccionPrograma) {
        alert('Empate. El programa eligio ' + eleccionPrograma);
    } else if (
        (eleccionUsuario === 'piedra' && eleccionPrograma === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionPrograma === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionPrograma === 'papel')
    ) {
        alert('¡Ganaste! El programa eligio ' + eleccionPrograma);
    } else {
        alert('Perdiste. El programa eligio ' + eleccionPrograma);
    }
}