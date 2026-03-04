import Saludo from "./components/saludo";
import MatematicasMagicas from "./components/MatematicasMagicas";
import TarjetaUsuario from "./components/TarjetaUsuario";

const App = () => {
  return (
    <div>
      <Saludo/>
      <MatematicasMagicas/>
       <TarjetaUsuario nombre="samuel" juegoFavorito="Fortnite"/>
            <TarjetaUsuario nombre="Nicolas" juegoFavorito="Minecraft"/>
            <TarjetaUsuario nombre="Mario" juegoFavorito="Call of Duty"/>
    </div>
  )
}

export default App


