import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
function App() {
  const [calaboradores , setCalaboradores] = useState('');
  const aoNovoCalaboradorAdicionado = (calaborador) => {
    console.log(calaborador);
    setCalaboradores([...calaboradores , calaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
      aoColaboradorCadastrado={colaborador => aoNovoCalaboradorAdicionado(colaborador)}
      />
    </div>
  );
}

export default App;
