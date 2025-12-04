// js/detalhes.js

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 1. DADOS DE EVENTOS (Ciclismo na Orla de BV atualizado para Nível Desafiador)
    // -----------------------------------------------------------
    const eventosData = [
        {
            id: "evento-corrida",
            title: "Corrida Matinal no Marco Zero",
            image: "img/marcozero.png",
            location: "Marco Zero — Recife Antigo",
            date: "14/12/2025 às 06:30", 
            participants: "12/20 vagas",
            current: 12, 
            max: 20,     
            modality: "Corrida",
            level: "Iniciante",
            distance: "5km", 
            description: "Junte-se a nós para uma corrida matinal revigorante no coração do Recife Antigo! Perfeito para quem está começando, o percurso plano de 5km oferece uma vista linda do nascer do sol no Marco Zero. Teremos alongamento guiado antes e depois da atividade. Traga sua água e energia!",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Marco%20Zero%20Recife%20Antigo&output=embed"
        },
        {
            id: "evento-ciclismo",
            title: "Ciclismo na Orla de BV",
            image: "img/ciclismo.png",
            location: "Boa Viagem — Recife",
            date: "15/12/2025 às 07:00", 
            participants: "8/15 vagas",
            current: 8,
            max: 15,
            modality: "Ciclismo",
            level: "Desafiador", // <--- CORRIGIDO: Agora é Desafiador
            distance: "20km",
            description: "Pedalada em grupo desafiadora pela orla de Boa Viagem (20km). Requer bom condicionamento físico. Saída pontual, favor chegar 15 minutos antes. Verifique sua bicicleta e traga equipamentos de segurança. Velocidade média: 30km/h.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Orla%20de%20Boa%20Viagem%20Recife&output=embed"
        },
        {
            id: "evento-yoga",
            title: "Yoga na Federal",
            image: "img/yoga.png",
            location: "Campus UFPE — Recife",
            date: "16/12/2025 às 08:00", 
            participants: "25/30 vagas",
            current: 25,
            max: 30,
            modality: "Yoga",
            level: "Iniciante",
            distance: null,
            description: "Aula de Hatha Yoga suave e restaurativa, perfeita para iniciantes. Aproveite a brisa e o visual do pôr do sol na orla histórica de Olinda. Traga seu tapete ou toalha e vista roupas confortáveis. A prática será focada em alongamento e respiração consciente.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Campus%20UFPE%20Recife&output=embed"
        },
        {
            id: "evento-trilha",
            title: "Trilha Brennadis",
            image: "img/trilha.png",
            location: "Oficina Brennand - Recife",
            date: "18/12/2025 às 06:30", 
            participants: "6/10 vagas",
            current: 6,
            max: 10,
            modality: "Trilha",
            level: "Desafiador",
            distance: "18km",
            description: "Trilha desafiadora nos arredores da Oficina Brennand. Percurso de 18km com subidas e descidas íngremes. Requer bom condicionamento físico e calçado apropriado. Leve bastante água e lanches. O foco é na resistência e na exploração da mata atlântica.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Oficina%20Brennand%20Recife&output=embed"
        },
        {
            id: "evento-natacao",
            title: "Troféu União das Águas",
            image: "img/natacao.png",
            location: "AABB - Recife",
            date: "20/12/2025 às 07:00", 
            participants: "18/30 vagas",
            current: 18,
            max: 30,
            modality: "Natação",
            level: "Intermediario",
            distance: "3km",
            description: "Competição amigável de natação em piscina semiolímpica. Aberta a nadadores de nível intermediário que queiram testar seu desempenho. Não é necessário ser federado. Haverá cronometragem oficial e medalhas simbólicas.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=AABB%20Recife&output=embed"
        },
        {
            id: "evento-caminhada",
            title: "Caminhada Histórica",
            image: "img/passoAlfandega.png",
            location: "Paço Alfândega — Recife Antigo",
            date: "22/12/2025 às 17:00", 
            participants: "30/30 vagas",
            current: 30, 
            max: 30,     
            modality: "Caminhada",
            level: "Iniciante",
            distance: "3km",
            description: "Passeio cultural a pé pelos principais pontos históricos do Recife Antigo, com guias que contarão a história da região. O ritmo é lento e acessível a todos. Leve um chapéu e use protetor solar.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Pa%C3%A7o%20Alfândega%20Recife%20Antigo&output=embed"
        },
    ];

    // -----------------------------------------------------------
    // 2. Lógica para Extrair e Exibir os Dados do Evento
    // -----------------------------------------------------------
    const urlHash = window.location.hash.substring(1); 
    const event = eventosData.find(e => e.id === urlHash);

    if (!event) {
        window.location.href = 'eventos.html';
        return; 
    }

    // -----------------------------------------------------------
    // 3. Renderização dos Dados na Tela
    // -----------------------------------------------------------
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-image').src = event.image;
    document.getElementById('event-image').alt = event.title;
    document.getElementById('event-date').textContent = event.date;
    document.getElementById('event-participants').textContent = event.participants;
    document.getElementById('event-description').textContent = event.description;
    
    // Adiciona o texto do local E torna-o clicável
    const locationTextElement = document.getElementById('event-location');
    locationTextElement.textContent = event.location;
    
    const locationLinkElement = document.getElementById('event-location-link');
    
    if (locationLinkElement && event.location) {
        const encodedLocation = encodeURIComponent(event.location);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
        locationLinkElement.href = googleMapsUrl;
    }
    
    // BADGES (Modalidade e Nível)
    const infoBadges = document.getElementById('info-badges');
    infoBadges.innerHTML = `
        <span class="badge primary-badge">${event.modality}</span>
        <span class="badge secondary-badge">${event.level}</span>
    `;

    // DISTÂNCIA (Só exibe se houver valor)
    const distanceContainer = document.getElementById('event-distance-container'); 
    if (event.distance) {
        document.getElementById('event-distance').textContent = event.distance;
        distanceContainer.style.display = 'flex'; 
    } else {
        distanceContainer.style.display = 'none';
    }
    
    // Renderiza o mapa 
    const mapFrame = document.getElementById('event-map-iframe');
    const mapSection = document.getElementById('map-section');
    if (mapFrame && mapSection && event.mapLink) {
        mapFrame.src = event.mapLink;
        mapSection.style.display = 'block'; 
    } else if (mapSection) {
        mapSection.style.display = 'none';
    }


    // -----------------------------------------------------------
    // 4. Lógica do Botão Principal (Verificação Dinâmica de Vagas)
    // -----------------------------------------------------------
    const participateButton = document.getElementById('btn-participar');
    
    const isFull = event.current >= event.max;

    if (isFull) {
        participateButton.innerHTML = '<span class="material-symbols-outlined">person_off</span> Evento Lotado';
        participateButton.disabled = true;
        participateButton.classList.remove('primary-btn');
        
        participateButton.style.color = '#777777'; 
        participateButton.style.backgroundColor = '#EEEEEE'; 
        participateButton.style.border = '1px solid #CCCCCC';
        participateButton.style.cursor = 'not-allowed';
    }

    participateButton.addEventListener('click', () => {
        
        if (isFull) {
            alert(`ATENÇÃO: O evento "${event.title}" está lotado (${event.participants}) e não é possível confirmar a participação.`);
            return; 
        }
        
        participateButton.innerHTML = '<span class="material-symbols-outlined">hourglass_top</span> Processando...';
        participateButton.disabled = true;

        setTimeout(() => {
            alert(`Você confirmou a participação no evento: ${event.title}!`);
            
            participateButton.innerHTML = '<span class="material-symbols-outlined">done_all</span> Participação Confirmada';
            participateButton.classList.remove('primary-btn');
            participateButton.classList.add('secondary-badge'); 
            participateButton.style.color = '#333333';
            participateButton.style.backgroundColor = '#d4edda'; 
            participateButton.style.border = '1px solid #c3e6cb';
        }, 1500); 
    });
});
