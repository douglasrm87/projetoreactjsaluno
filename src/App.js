import './App.css';
 

import UnificandoModulos from './Componentes/moduloUnificado/UnificandoModulos';
import OficinaBandeiraIslandia from './Componentes/OficinaBandeiraIslandia';
import OficinaComponente from './Componentes/OficinaComponente';



// Acionará o UnificandoModulos.js
function App() {
  return (
    <div className="App">
      {/* Comment/uncomment the components below to switch between views */}
      {/* <UnificandoModulos /> */}
      <OficinaComponente/>
      <OficinaBandeiraIslandia />
    </div>
  );
}

export default App;
