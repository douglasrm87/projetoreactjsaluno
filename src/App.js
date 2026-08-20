import './App.css';
import MeuLogin from './Componentes/modulologin/MeuLogin';
 

import UnificandoModulos from './Componentes/moduloUnificado/UnificandoModulos';
import OficinaBandeiraIslandia from './Componentes/OficinaBandeiraIslandia';
import OficinaComponente from './Componentes/OficinaComponente';



// Acionará o UnificandoModulos.js
function App() {
  return (
    <div className="App">
      {/* Comment/uncomment the components below to switch between views */}
      {/* <UnificandoModulos /> */}
      {/*<OficinaComponente/>
      <OficinaBandeiraIslandia /> */}

       {/*
            A) Propor qual problema que a sua solução escolhida resolverá.
            B) Vamos projetar as interfaces gráficas
                Gravar seu trabalho em arquivo word e subir no SAVA.
        
              Ferramentas para confeccionar as interfaces gráficas: 
                https://www.figma.com/pt-br/
                planUML
       */}
      <MeuLogin />
    </div>
  );
}

export default App;
