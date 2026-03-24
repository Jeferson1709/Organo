import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
function App() {
  const [calaboradores, setCalaboradores] = useState("");
  const aoNovoCalaboradorAdicionado = (calaborador) => {
    console.log(calaborador);
    setCalaboradores([...calaboradores, calaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoCalaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programção" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
