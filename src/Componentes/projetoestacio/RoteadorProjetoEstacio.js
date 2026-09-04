import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginSmartBus from './LoginSmartBus'
import SmartBusHome from './SmartBusHome'
// npm install react-router-dom
function RoteadorProjetoEstacio() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSmartBus />} />
        <Route path="/home" element={<SmartBusHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoteadorProjetoEstacio