function MatematicasMagicas() {
    // Paso 1: Javascript normal
    const nombre = "Samuel";
    const edad = 17;
    const anioNacimiento = 2026 - edad; //calculamos algo rapido
    // Paso 2: El portal magico de las llaves {}
    return (
        <div className="tarjeta">
            <h2>Perfil de {nombre}</h2>
            <p>si tienes {edad} años, naciste aproximadamente en {anioNacimiento}.</p>
        <p>¿Cuanto es 5 por 5? ¡Es {5 * 5} !</p>
        </div>
    )
    }

    export default MatematicasMagicas;