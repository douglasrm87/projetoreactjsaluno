export const jogosDoDia = [
  {
    timeA: 'Palmeiras',
    timeB: 'Flamengo',
    horario: '18:30',
    local: 'Allianz Parque',
    canais: {
      aberta: ['TV Globo', 'SBT'],
      fechada: ['ESPN', 'Premiere'],
    },
  },
  {
    timeA: 'São Paulo',
    timeB: 'Corinthians',
    horario: '20:00',
    local: 'Morumbi',
    canais: {
      aberta: ['Band', 'TV Globo'],
      fechada: ['ESPN', 'Premiere'],
    },
  },
  {
    timeA: 'Grêmio',
    timeB: 'Internacional',
    horario: '21:30',
    local: 'Arena do Grêmio',
    canais: {
      aberta: ['Band'],
      fechada: ['ESPN', 'Premiere'],
    },
  },
];

export const jogosDaSemana = [
  {
    timeA: 'Bahia',
    timeB: 'Vasco',
    horario: 'Qua 19:00',
    local: 'Arena Fonte Nova',
    canais: {
      aberta: ['TV Globo'],
      fechada: ['ESPN', 'Premiere'],
    },
  },
  {
    timeA: 'Cruzeiro',
    timeB: 'Atlético-MG',
    horario: 'Sex 20:30',
    local: 'Mineirão',
    canais: {
      aberta: ['Band'],
      fechada: ['ESPN', 'Premiere'],
    },
  },
  {
    timeA: 'Santos',
    timeB: 'Botafogo',
    horario: 'Dom 16:00',
    local: 'Vila Belmiro',
    canais: {
      aberta: ['SBT'],
      fechada: ['ESPN', 'Premiere'],
    },
  },
];

export const corridasDoDia = [
  {
    nome: 'GP de Monza',
    horario: '15:00',
    circuito: 'Autódromo de Monza',
    canais: {
      aberta: ['Band'],
      fechada: ['ESPN', 'F1 TV'],
    },
  },
  {
    nome: 'Treino Livre 2',
    horario: '11:30',
    circuito: 'Circuito de Silverstone',
    canais: {
      aberta: ['TV Globo'],
      fechada: ['ESPN', 'F1 TV'],
    },
  },
  {
    nome: 'Qualifying',
    horario: '14:00',
    circuito: 'Circuito de Suzuka',
    canais: {
      aberta: ['Band'],
      fechada: ['ESPN', 'F1 TV'],
    },
  },
];

export const corridasDaSemana = [
  {
    nome: 'GP de Mônaco',
    horario: 'Ter 13:00',
    circuito: 'Monte Carlo',
    canais: {
      aberta: ['Band'],
      fechada: ['ESPN', 'F1 TV'],
    },
  },
  {
    nome: 'GP da Espanha',
    horario: 'Qui 15:30',
    circuito: 'Barcelona',
    canais: {
      aberta: ['TV Globo'],
      fechada: ['ESPN', 'F1 TV'],
    },
  },
  {
    nome: 'GP do Canadá',
    horario: 'Dom 14:00',
    circuito: 'Montreal',
    canais: {
      aberta: ['Band'],
      fechada: ['ESPN', 'F1 TV'],
    },
  },
];

const esporteDados = {
  jogosDoDia,
  jogosDaSemana,
  corridasDoDia,
  corridasDaSemana,
};

export default esporteDados;
