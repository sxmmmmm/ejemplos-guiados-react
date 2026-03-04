import { useState } from "react"; // paso 1: importar el superpoder

function BotonLike(){
    // Paso 2: Crear la memoria.
    // 'setLikes' es la ÚNICA forma permitida de modificar 'likes'.
    // 'likes' es la variable actual.
    // 0 es la cantidad de likes iniciales.
    const [likes, setLikes] = useState(0);
    // Funcion que se ejecuta al hacer clic
    const darLike = () => {
        setLikes(likes + 1);  // Le decimos a React: "Oye, suma 1 y actualiza la pantalla"
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <h2>Post: ¿La pizza con piña es buena? </h2> 
            <button onClick={darLike} style={{fontSize: '20px', padding:'10px'}}>
                Me Gusta {likes}
            </button>
            {likes > 10 && <p> Wow, esto se esta volviendo viral!</p>}
        </div>
    )  

} 

export default BotonLike;