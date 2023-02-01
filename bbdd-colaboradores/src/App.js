import { useState } from "react";
import Boton from "./components/Boton"
function App() {
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [sesion, setSesion] = useState(false)
  const [error, setError] = useState(false)
  const validarPass = (e) => {

    e.preventDefault()

    if (nombre === 'ADL' && contraseña === '252525') {
      setSesion(true)
      setError(false)
    } else {
      setSesion(false)
      setError(true)
    }
  }
  return (
    <div className="App container">
      <h1>Desafío Estado de los componentes y eventos</h1>

      {sesion ? <p className="alert alert-primary" role="alert">Has iniciado sesión correctamente</p> : null}
      {error ? <p className="alert alert-danger" role="alert">El usuario y contraseña ingresados no son correctos</p> : null}
      
      <form onSubmit={validarPass}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input id="name" className="form-control" name="Nombre" onChange={(e) => setNombre(e.target.value)} />
      
          <label htmlFor="pass">Contraseña</label>
          <input id="pass" className="form-control" type="password" name="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
      
          <Boton disabled={nombre === "" || contraseña === ""} label="Iniciar Sesión">
          </Boton>
        </div>
      </form>
    </div>
  );
}

export default App;
