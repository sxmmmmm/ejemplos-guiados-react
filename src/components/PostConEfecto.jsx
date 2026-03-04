import { useState, useEffect, use } from "react";

function PostConEfecto() {
    const [mensajes, setMensajes] = useState(0);
    useEffect(() => {
        document.title = `Tienes ${mensajes} mensajes nuevos`
    }, [mensajes]);
    
    return (
        <div>
            <h2>Bandeja De Entrada </h2>
            <p>Mensajes sin leer: {mensajes}</p>
            <button onClick={() => setMensajes (mensajes+ 1) }>
                Recibir Nuevo Mensaje
            </button>
        </div>
    )
}

export default PostConEfecto;