import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
function App() {

 
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
