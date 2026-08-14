import React, { useState } from 'react';
import './styles.css';

// Components
import OficinaComponente from '../modulo01/OficinaComponente';
import OficinaBandeira from '../modulo01/OficinaBandeira';
import OficinaForm from '../modulo01/OficinaForm';
import CalculadoraIP from '../modulo01/CalculadoraIP';
import { MeuTemplate } from '../modulo02/MeuTemplate';
import MeuEvento from '../modulo02/MeuEvento';
import MeuEventoRenderiza from '../modulo02/MeuEventoRenderiza';
import RenderizarListas from '../modulo03/RenderizarListas';
import RenderizaListasIndice from '../modulo03/RenderizaListasIndice';
import RenderizaListaVetorRemove from '../modulo04/RenderizaListaVetorRemove';
import RenderizaCondicional from '../modulo04/RenderizaCondicional';
import RenderizaCondicionalElse from '../modulo04/RenderizaCondicionalElse';
import MinhaProps from '../modulo04/MinhaProps';
import CarroDesestruturarPropriedades from '../modulo05/CarroDesestruturarPropriedades';
import RecuperarCarros from '../modulo06/RecuperarCarros';
import FragmentoReact from '../modulo07/FragmentoReact';
import PropFilha from '../modulo07/PropFilha';
import Calculator from '../modulo08/Calculator';
import JogoCacaPalavrasPrincipal from '../JogoCacaPalavrasParte01/JogoCacaPalavrasPrincipal';
import JogoCacaPalavrasPrincipal02 from '../JogoCacaPalavrasParte02/JogoCacaPalavrasPrincipal';
import JogoCacaPalavrasPrincipal03 from '../JogoCacaPalavrasParte03/JogoCacaPalavrasPrincipal';

/**
 * Componente principal de navegação e gerenciamento de módulos unificados
 * 
 * Este componente funciona como um hub central da aplicação React, implementando
 * um sistema de navegação por abas que permite alternar entre diferentes módulos
 * e funcionalidades de forma dinâmica.
 * 
 * @component
 * @returns {React.ReactElement} Interface com sidebar de navegação e área de conteúdo principal
 * 
 * @description
 * Funcionalidades principais:
 * - Gerencia o estado do módulo ativo através do hook useState
 * - Mantém um mapeamento centralizado de todos os módulos disponíveis
 * - Renderiza uma barra lateral (sidebar) com botões de navegação
 * - Exibe dinamicamente o componente do módulo selecionado na área principal
 * - Destaca o botão do módulo ativo com classe CSS
 * 
 * @example
 * // Uso básico do componente
 * <UnificandoModulos />
 * 
 * @state {string} activeModule - Identificador do módulo atualmente exibido (padrão: 'home')
 * 
 * @const {Object} modules - Objeto contendo todos os módulos registrados com suas
 *        propriedades: title (título exibido) e component (componente a renderizar)
 */
/**
 * Componente principal que unifica todos os módulos da aplicação React
 * 
 * @component
 * @returns {React.ReactElement} Interface com navegação lateral e conteúdo dinâmico
 * 
 * @description
 * UnificandoModulos é um componente container que gerencia a navegação entre
 * diferentes módulos/páginas da aplicação. Ele mantém o estado do módulo ativo
 * e renderiza dinamicamente o componente correspondente baseado na seleção do usuário.
 * 
 * @example
 * // Uso básico
 * <UnificandoModulos />
 * 
 * @state {string} activeModule - Chave do módulo atualmente ativo (padrão: 'home')
 * 
 * @structure
 * - Barra lateral (sidebar) com botões de navegação para cada módulo
 * - Área principal (main-content) que exibe o componente do módulo ativo
 * - Header com título do módulo selecionado
 * - Body com o conteúdo do componente renderizado
 */
const UnificandoModulos = () => {
  const [activeModule, setActiveModule] = useState('home');

  // Components mapping
  /**
   * Módulo de configuração unificada de componentes React
   * @typedef {Object} Module
   * @property {string} title - Título do módulo exibido na interface
   * @property {React.ComponentType|Function} component - Componente React ou função que retorna JSX
   */

  /**
   * Objeto de configuração dos módulos disponíveis no sistema unificado
   * 
   * @constant {Object} modules
   * 
   * @property {Module} home - Página inicial com boas-vindas e componente OficinaBandeira
   * 
   * @property {Module} oficina - Módulo de oficina contendo OficinaComponente e OficinaForm
   * 
   * @property {Module} calculadora - Ferramenta para cálculo de endereços IP
   * 
   * @property {Module} eventos - Módulo de eventos com MeuTemplate, MeuEvento e MeuEventoRenderiza
   * 
   * @property {Module} listas - Módulo de renderização de listas com diferentes variações (normal, com índice, com remoção)
   * 
   * @property {Module} condicionais - Módulo de renderização condicional com exemplos de if/else e passagem de props
   * 
   * @property {Module} carros - Sistema de gestão de carros com desestruturação de propriedades e recuperação de dados
   * 
   * @property {Module} avancado - Recursos avançados React incluindo Fragments e Props filhas
   * 
   * @property {Module} funcaoParametro - Componente Calculator para operações com funções parametrizadas
   * 
   * @property {Module} jogocacapalavras - Jogo Caça Palavras - Etapa 01 com lógica inicial
   * 
   * @property {Module} jogocacapalavras02 - Jogo Caça Palavras - Etapa 02 com funcionalidades expandidas
   * 
   * @property {Module} jogocacapalavras03 - Jogo Caça Palavras - Etapa 03 com melhorias finais
   * 
   * @description
   * Estrutura centralizada que organiza todos os módulos da aplicação React,
   * permitindo navegação dinâmica e renderização condicional de componentes
   */
  const modules = {
    home: {
      title: 'Bem-vindo ao Sistema Unificado',
      component: () => (
        <div className="welcome-section">
          <h1>Sistema de Demonstração React</h1>
          <p>Selecione um módulo no menu para começar</p>
          <OficinaBandeira />
        </div>
      )
    },
    oficina: {
      title: 'Módulo Oficina',
      component: () => (
        <div className="module-section">
          <OficinaComponente />
          <OficinaForm />
        </div>
      )
    },
    calculadora: {
      title: 'Calculadora IP',
      component: CalculadoraIP
    },
    eventos: {
      title: 'Eventos e Templates',
      component: () => (
        <div className="module-section">
          <MeuTemplate />
          <MeuEvento />
          <MeuEventoRenderiza />
        </div>
      )
    },
    listas: {
      title: 'Renderização de Listas',
      component: () => (
        <div className="module-section">
          <RenderizarListas />
          <RenderizaListasIndice />
          <RenderizaListaVetorRemove />
        </div>
      )
    },
    condicionais: {
      title: 'Renderização Condicional',
      component: () => (
        <div className="module-section">
          <RenderizaCondicional />
          <RenderizaCondicionalElse />
          <MinhaProps nome="Usuário Exemplo" />
        </div>
      )
    },
    carros: {
      title: 'Sistema de Carros',
      component: () => (
        <div className="module-section">
          <CarroDesestruturarPropriedades
            marca="Fiat"
            cor="Vermelho"
            zero={true}
            km={0}
          />
          <RecuperarCarros />
        </div>
      )
    },
    avancado: {
      title: 'Recursos Avançados',
      component: () => (
        <div className="module-section">
          <FragmentoReact />
          <PropFilha nomeDev="Desenvolvedor React">
            <p><br></br>Programa PropFilha.js</p>
            <h1>Exemplo de Propriedade Filha</h1>
            <h2>Este é o h2 do PropFilha</h2>
            <h3>Este é o h3 do PropFilha</h3>
          </PropFilha>
        </div>
      )
    },
    funcaoParametro: {
      title: 'Funcao Parametro',
      component: Calculator
    },
    jogocacapalavras: {
      title: 'Caça Palavras Etapa 01',
      component: JogoCacaPalavrasPrincipal
    },
    jogocacapalavras02: {
      title: 'Caça Palavras Etapa 02',
      component: JogoCacaPalavrasPrincipal02  
    },
    jogocacapalavras03: {
      title: 'Caça Palavras Etapa 03',
      component: JogoCacaPalavrasPrincipal03
    }
  };

  const CurrentComponent = modules[activeModule].component;

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="nav-header">
          <h2>Módulos</h2>
        </div>
        {Object.entries(modules).map(([key, { title }]) => (
          <button
            key={key}
            className={`nav-button ${activeModule === key ? 'active' : ''}`}
            onClick={() => setActiveModule(key)}
          >
            {title}
          </button>
        ))}
      </nav>
      
      <main className="main-content">
        <header className="content-header">
          <h1>{modules[activeModule].title}</h1>
        </header>
        <div className="content-body">
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
};

export default UnificandoModulos;
