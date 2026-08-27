import { useState, useEffect } from "react";

function PainelPedidos({ totalInicial }) {
  const [totalPedidos, setTotalPedidos] = useState(totalInicial);

  useEffect(() => {
    console.log(`Total de pedidos atualizado: ${totalPedidos}`);
  }, [totalPedidos]);

  return (
    <div>
      <h2>Total de Pedidos: {totalPedidos}</h2>

      <button onClick={() => setTotalPedidos(totalPedidos + 1)}>
        Novo Pedido
      </button>
    </div>
  );
}

export default PainelPedidos;