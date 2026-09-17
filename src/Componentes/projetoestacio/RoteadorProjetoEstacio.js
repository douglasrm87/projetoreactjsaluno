import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginSmartBus from './telas/LoginSmartBus'
import SmartBusHome from './telas/SmartBusHome'
import PlanejadorCopelSantaQuiteria from './telas/PlanejadorCopelSantaQuiteria'
import MapaTuristicoNatureza from "./telas/MapaTuristicoNatureza";
import Favoritos from './telas/Favoritos';
import Ocorrencias from './telas/Ocorrencias';
import AssistenciaSocial from './telas/AssistenciaSocial';

// npm install react-router-dom
function RoteadorProjetoEstacio() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSmartBus />} />
        <Route path="/home" element={<SmartBusHome />} />
        <Route path="/linhas" element={<PlanejadorCopelSantaQuiteria/>} />
        <Route path="/mapa-turistico" element={<MapaTuristicoNatureza/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/ocorrencias" element={<Ocorrencias/>} />
        <Route path="/assistencia-social" element={<AssistenciaSocial/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoteadorProjetoEstacio