import Saludo from "./components/saludo";
import MatematicasMagicas from "./components/MatematicasMagicas";
import TarjetaUsuario from "./components/TarjetaUsuario";
import BotonLike from "./components/BotonLike";
import PostConEfecto from "./components/PostConEfecto";

const App = () => {
  return (
    <div>
      <Saludo/>
      <MatematicasMagicas/>
       <TarjetaUsuario nombre="samuel" juegoFavorito="Fortnite"/>
        <TarjetaUsuario nombre="Nicolas" juegoFavorito="Minecraft"/>
        <TarjetaUsuario nombre="Mario" juegoFavorito="Call of Duty"/>
        <BotonLike />
        <PostConEfecto/>

    </div>
  )
}

export default App


