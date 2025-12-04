# 📱 Coony: Plataforma Mobile-First para Gestão e Descoberta de Eventos Esportivos

## 📌 Sumário Executivo e Proposta de Valor
O **Projeto Coony** é uma **Prova de Conceito (POC)** que simula uma plataforma ágil e intuitiva para conectar organizadores de eventos esportivos (corridas, trilhas, ioga) a participantes.  

- **Proposta de Valor:** Experiência otimizada para dispositivos móveis, garantindo descoberta, filtragem e participação em eventos de forma rápida e eficiente.  
- **Objetivo Estratégico:** Validar a eficácia de uma arquitetura **HTML, CSS e JS** na construção de um aplicativo web responsivo e de alta performance, sem dependência de grandes frameworks.  
- **Diferencial Técnico:** Uso da metodologia **Mobile-First** no CSS e manipulação direta do DOM via JavaScript, garantindo carregamento rápido e baixo consumo de memória.  

> Além de atuar como **Tech Leader**, também desempenhei o papel de **Scrum Master** neste projeto.

---

## 🛠️ Arquitetura Técnica e Design System

O projeto adota uma arquitetura de cliente puro (**SPA de transição**), com separação clara de responsabilidades:

| Camada        | Tecnologia | Responsabilidade | Padrões Aplicados |
|---------------|------------|------------------|-------------------|
| **Estrutura (View)** | HTML5 | Semântica e organização do conteúdo | Uso de `header`, `main`, `footer` fixo e `section` |
| **Estilo (Design)** | CSS3 | Identidade visual, responsividade e micro-interações | Mobile-First, variáveis CSS (`:root`), tipografia (Montserrat, Roboto, Inter), sombras suaves |
| **Lógica (Controller)** | JavaScript | Estado da aplicação, filtros, validação e comunicação entre telas | Manipulação direta do DOM, Query Parameters para navegação de estado |

### Metodologia CSS: Mobile-First
- Estilo construído para smartphones (**max-width: 420px**)  
- Media queries apenas para otimizações em telas maiores  
- Experiência compacta e focada, semelhante a um app nativo  

---

## 🔄 Fluxo de Navegação e Comportamento (JavaScript)

A interação entre telas é realizada via **Query Parameters**, simulando o fluxo de dados de um aplicativo real.

### 1. Listagem de Eventos (`eventos.html`)
- **Função Primária:** Descoberta e filtragem de dados  
- **HTML:** Select de filtros (Modalidade/Dificuldade) + área de renderização `#lista-eventos`  
- **JS (`eventos.js`):**
  - Fonte de dados: `eventosEstaticos`  
  - Filtro multi-critério: busca por texto, modalidade e dificuldade  
  - Alternância visual: modos **Lista** e **Grade**  
  - Transição de estado: injeta `id` do evento na URL  

### 2. Detalhes do Evento (`detalhes.html`)
- **Função Primária:** Informação completa e conversão (adesão)  
- **HTML:** Estrutura modular com placeholders (`<span id="...">`) + footer fixo com CTA  
- **JS (`detalhes.js`):**
  - Recupera ID via `getEventIdFromUrl()`  
  - Renderiza dinamicamente imagem, título, badges e mapa (iframe)  
  - Simulação assíncrona: botão CTA com estados **Lotado**, **Processando...**, **Confirmado**  

### 3. Criação de Novo Evento (`criar.html`)
- **Função Primária:** Input de dados e validação de formulário  
- **HTML:** Formulário estruturado em `form-group` + ilustração de fundo  
- **JS (`criarEvento.js`):**
  - Lógica condicional: campo "Outro (Especifique)"  
  - Validação mínima: botão desabilitado até preenchimento obrigatório  
  - UX do upload: feedback visual imediato ao selecionar arquivo  

---

## 👨‍💻 Atribuição e Autoria

Este projeto de **Prova de Conceito (POC)** foi integralmente idealizado, estruturado e desenvolvido por:

**Paulo Fukahori**  
- Analista de Sistemas  
- Front-end Full-Stack  
- Designer  

📂 Repositório do Projeto: [GitHub - tela-eventos](https://github.com/PauloFukahori/tela-eventos)  

> Todos os arquivos **HTML, CSS e JavaScript**, assim como a arquitetura **Mobile-First**, o **Design System** e a lógica de simulação de estado, são de minha autoria.

---

## 🚀 Conclusão
O **Coony** demonstra como uma arquitetura simples e bem planejada pode entregar alta performance em dispositivos móveis, com foco em UX e responsividade.  

---
