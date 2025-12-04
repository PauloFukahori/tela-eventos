// js/eventos.js

// 1. DADOS ESTÁTICOS (Base para a lista de eventos)
const eventosEstaticos = [
    {
        id: "evento-corrida",
        title: "Corrida Matinal no Marco Zero",
        image: "img/marcozero.png",
        location: "Marco Zero — Recife Antigo",
        date: "14/12/2025 às 06:30", 
        modality: "corrida", 
        level: "iniciante",   
        fullId: "evento-corrida", 
    },
    {
        id: "evento-ciclismo",
        title: "Ciclismo na Orla de BV",
        image: "img/ciclismo.png",
        location: "Boa Viagem — Recife",
        date: "15/12/2025 às 07:00", 
        modality: "ciclismo",
        level: "desafiador", // <--- CORRIGIDO: Agora é 'desafiador'
        fullId: "evento-ciclismo",
    },
    {
        id: "evento-yoga",
        title: "Yoga na Federal",
        image: "img/yoga.png",
        location: "Campus UFPE — Recife",
        date: "16/12/2025 às 08:00", 
        modality: "yoga",
        level: "iniciante",
        fullId: "evento-yoga",
    },
    {
        id: "evento-trilha",
        title: "Trilha Brennadis",
        image: "img/trilha.png",
        location: "Oficina Brennand - Recife",
        date: "18/12/2025 às 06:30", 
        modality: "trilha",
        level: "desafiador",
        fullId: "evento-trilha",
    },
    {
        id: "evento-natacao",
        title: "Troféu União das Águas",
        image: "img/natacao.png",
        location: "AABB - Recife",
        date: "20/12/2025 às 07:00", 
        modality: "natacao",
        level: "intermediario",
        fullId: "evento-natacao",
    },
    {
        id: "evento-caminhada",
        title: "Caminhada Histórica",
        image: "img/passoAlfandega.png",
        location: "Paço Alfândega — Recife Antigo",
        date: "22/12/2025 às 17:00", 
        modality: "caminhada",
        level: "iniciante",
        fullId: "evento-caminhada",
    },
];

let eventosAtuais = [];
let visualizacaoAtual = 'lista';

// 2. LÓGICA DE CARREGAMENTO DE EVENTOS
function carregarEventos() {
    let todosEventos = [...eventosEstaticos];
    
    // Carrega eventos do localStorage (Novos Eventos Criados)
    const novosEventosJSON = localStorage.getItem('novosEventos');
    if (novosEventosJSON) {
        try {
            const novosEventos = JSON.parse(novosEventosJSON);
            todosEventos = [...novosEventos, ...todosEventos]; 
        } catch (e) {
            console.error("Erro ao carregar eventos do localStorage:", e);
        }
    }
    
    eventosAtuais = todosEventos;
    
    // Inicia a visualização
    renderizarEventos(eventosAtuais);
    
    // Sincroniza o botão de visualização ativo
    document.getElementById('btn-lista').classList.add('primary-btn');
    document.getElementById('btn-grade').classList.add('secondary-btn');
}


// 3. LÓGICA DE RENDERIZAÇÃO
function renderizarEventos(eventosParaRenderizar) {
    const container = document.getElementById('eventos-lista-grade');
    container.innerHTML = '';
    
    container.className = visualizacaoAtual === 'lista' ? 'eventos-lista' : 'eventos-grid';

    if (eventosParaRenderizar.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6c757d; margin-top: 30px;">Nenhum evento encontrado com os filtros aplicados.</p>';
        return;
    }

    eventosParaRenderizar.forEach(event => {
        const cardHTML = `
            <div class="evento-card">
                <img src="${event.image}" alt="${event.title}" />
                <div class="card-content"> 
                    <h3 class="badge">${event.title}</h3>
                    <p class="location-info"><span class="material-symbols-outlined icon-orange">location_on</span> ${event.location}</p>
                    <p class="date-info"><span class="material-symbols-outlined icon-orange">calendar_month</span> ${event.date}</p>
                    <p class="modalidade" style="display: none;">${event.modality}</p>
                    <p class="nivel" style="display: none;">${event.level}</p>
                </div>
                <a href="detalhes.html#${event.fullId}" class="button">Ver Detalhes</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}


// 4. LÓGICA DE FILTRAGEM
function filtrarEventos() {
    // Carrega todos os eventos (estáticos + novos) antes de filtrar
    carregarEventos(); 
    
    const busca = document.getElementById('busca').value.toLowerCase();
    const modalidadeFiltro = document.getElementById('filtro-esporte').value;
    const dificuldadeFiltro = document.getElementById('filtro-dificuldade').value;

    const eventosFiltrados = eventosAtuais.filter(event => {
        const titleMatch = event.title.toLowerCase().includes(busca);
        const locationMatch = event.location.toLowerCase().includes(busca);
        
        const modalidadeMatch = modalidadeFiltro === 'todos' || event.modality === modalidadeFiltro;
        // O filtro agora compara com 'desafiador'
        const dificuldadeMatch = dificuldadeFiltro === 'todos' || event.level === dificuldadeFiltro;

        const textMatch = titleMatch || locationMatch;

        return textMatch && modalidadeMatch && dificuldadeMatch;
    });

    renderizarEventos(eventosFiltrados);
}


// 5. LÓGICA DE MUDANÇA DE VISUALIZAÇÃO
function mudarVisualizacao(novoVisual) {
    visualizacaoAtual = novoVisual;
    
    document.getElementById('btn-lista').classList.remove('primary-btn', 'secondary-btn');
    document.getElementById('btn-grade').classList.remove('primary-btn', 'secondary-btn');
    
    if (novoVisual === 'lista') {
        document.getElementById('btn-lista').classList.add('primary-btn');
        document.getElementById('btn-grade').classList.add('secondary-btn');
    } else {
        document.getElementById('btn-grade').classList.add('primary-btn');
        document.getElementById('btn-lista').classList.add('secondary-btn');
    }

    filtrarEventos(); 
}

// Expõe as funções globais referenciadas no eventos.html
window.filtrarEventos = filtrarEventos;
window.mudarVisualizacao = mudarVisualizacao;


// Inicia a aplicação no DOMContentLoaded
document.addEventListener('DOMContentLoaded', carregarEventos);
