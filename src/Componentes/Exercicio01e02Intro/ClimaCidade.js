import { useState, useEffect } from "react";
// <ClimaCidade cidade="Curitiba" />
// <ClimaCidade cidade="Londrina" />
function ClimaCidade({ cidade }) {
  const [temperatura, setTemperatura] = useState(null);

  useEffect(() => {
    console.log(`Consultando temperatura de ${cidade}...`);

    setTemperatura(25);
  }, [cidade]);

  return (
    <div>
      <h3>Cidade: {cidade}</h3>
      <p>Temperatura: {temperatura}°C</p>
    </div>
  );
}

export default ClimaCidade;