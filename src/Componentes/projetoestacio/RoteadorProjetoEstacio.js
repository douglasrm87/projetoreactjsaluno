import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginSmartBus from './LoginSmartBus'
import SmartBusHome from './SmartBusHome'
import PlanejadorCopelSantaQuiteria from './PlanejadorCopelSantaQuiteria'
import MapaTuristicoNatureza from "./MapaTuristicoNatureza";
import Favoritos from './Favoritos';
import Ocorrencias from './Ocorrencias';
import AssistenciaSocial from './AssistenciaSocial';

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