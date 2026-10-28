const contentor = document.getElementById('lista-paloma');

const categorias = [
    {
        titulo: "", 
        itens: [
            { nome: "Café", sub: "", preco: "1,20", un: "/un" },
            { nome: "Descafeinado", sub: "", preco: "1,30", un: "/un" },
            { nome: "Carioca/Carioca de Limão", sub: "", preco: "1,00", un: "/un" },
            { nome: "Pingo Normal", sub: "", preco: "1,00", un: "/un" },
            { nome: "Pingo Direto", sub: "", preco: "1,25", un: "/un" },
            { nome: "Cevada", sub: "", preco: "1,00", un: "/un" },
            { nome: "Meia de Leite", sub: "", preco: "1,80", un: "/un" },
            { nome: "Galão", sub: "", preco: "1,90", un: "/un" },
            { nome: "Cappucino", sub: "", preco: "2,20", un: "/un" },
            { nome: "Copo de Leite", sub: "", preco: "1,20", un: "/un" },
            { nome: "Carioca de Limão Duplo", sub: "", preco: "1,20", un: "/un" },
            { nome: "Chá-Diversos", sub: "", preco: "1,60", un: "/un" },
        ]
    },
    {
        titulo: "Bebidas 🥤 ", 
        itens: [
            { nome: "Água 0.50L", sub: "", preco: "1,60", un: "/un" },
            { nome: "Água 1.50L", sub: "", preco: "2,00", un: "/un" },
            { nome: "Água C/Gás", sub: "", preco: "1,80", un: "/un" },
            { nome: "Água C/Gás Sabores", sub: "", preco: "2,00", un: "/un" },
            { nome: "Água Tónica", sub: "", preco: "2,50", un: "/un" },
            { nome: "Água Tónica Le Tribute", sub: "", preco: "3,50", un: "/un" },
            { nome: "Refrigerantes de Lata", sub: "", preco: "2,40", un: "/un" },
            { nome: "Néctares", sub: "", preco: "2,20", un: "/un" },
            { nome: "Red Bull", sub: "", preco: "4,00", un: "/un" },
            { nome: "Sumo de Laranja Natural", sub: "", preco: "4,00", un: "/un" },
            { nome: "Limonada", sub: "", preco: "4,00", un: "/un" },
            { nome: "Limonada Sabores", sub: "", preco: "4,50", un: "/un" },
        ]
    },
    {
        titulo: "Vinhos 🍷 ",
        itens: [
            { nome: "Tons Maduro", sub: "", preco: "12,00", un: "/un" },
            { nome: "Tons Maduro Tinto", sub: "", preco: "12,00", un: "/un" },
            { nome: "Mateus Rose/Branco", sub: "", preco: "12,00", un: "/un" },
            { nome: "Aveleda", sub: "", preco: "12,00", un: "/un" },
            { nome: "Praia", sub: "", preco: "12,00", un: "/un" },
            { nome: "Copo de Vinho", sub: "", preco: "4,00", un: "/un" },
        ]
    },
    {
        titulo: "Cerveja 🍻 ",
        itens:[
            { nome: "Fino", sub: "", preco: "2,20", un: "/un" },
        { nome: "Tango / Panache", sub: "", preco: "2,30", un: "/un" },
        { nome: "Caneca Cerveja", sub: "", preco: "4,00", un: "/un" },
        { nome: "Super Bock 0.33L", sub: "", preco: "2,00", un: "/un" },
        { nome: "Super Bock Mini", sub: "", preco: "1,60", un: "/un" },
        { nome: "Cerveja Preta", sub: "", preco: "2,00", un: "/un" },
        { nome: "Cerveja S/ álcool", sub: "", preco: "2,00", un: "/un" },
        { nome: "Martini / Favaios", sub: "", preco: "3,20", un: "/un" },
        { nome: "Somersby", sub: "", preco: "4,00", un: "/un" },
        { nome: "La Casera (Tinto de Verano)", sub: "", preco: "4,00", un: "/un" },
        ]
    },
    {
        titulo:"Cocktails 🍸",
        itens:[
            { nome: "Aperol Spritz", sub: "", preco: "7,00", un: "/un" },
            { nome: "Caipirinha", sub: "", preco: "7,00", un: "/un" },
            { nome: "Caipirinha Sabores", sub: "", preco: "8,00", un: "/un" },
            { nome: "Mojito", sub: "", preco: "8,00", un: "/un" },
            { nome: "Mojito Sabores", sub: "", preco: "9,00", un: "/un" },
            { nome: "Moscow Mule", sub: "", preco: "10,00", un: "/un" },
            { nome: "Fresh Kiss", sub: "", preco: "9,00", un: "/un" },
            { nome: "Espresso Martini", sub: "", preco: "10,00", un: "/un" },
            { nome: "Piña Colada", sub: "", preco: "9,00", un: "/un" },
            { nome: "Saint Germain", sub: "", preco: "7,00", un: "/un" },
            { nome: "Hugo Spritz", sub: "", preco: "7,00", un: "/un" },
            { nome: "Paloma", sub: "", preco: "9,00", un: "/un" },
        ]
    },
    {
        titulo:"Bebidas Brancas 🥂",
        itens:[
            { nome: "Gin Serviço", sub: "", preco: "7,00", un: "/un" },
            { nome: "Nordés", sub: "", preco: "10,00", un: "/un" },
            { nome: "Tanqueray Sevilla", sub: "", preco: "10,00", un: "/un" },
            { nome: "Vodka Serviço", sub: "", preco: "7,00", un: "/un" },
            { nome: "Absolut", sub: "", preco: "8,00", un: "/un" },
            { nome: "Bacardi", sub: "", preco: "6,50", un: "/un" },
            { nome: "Bacardi Lemon", sub: "", preco: "6,50", un: "/un" },
            { nome: "Capitain Morgan", sub: "", preco: "8,00", un: "/un" },
            { nome: "Santissima Trindade", sub: "", preco: "7,00", un: "/un" },     
            { nome: "Whiskey Serviço", sub: "", preco: "7,00", un: "/un" },
            { nome: "Jack Daniel's", sub: "", preco: "8,00", un: "/un" },
            { nome: "Cardu", sub: "", preco: "10,00", un: "/un" },
        ]
    },
    {
        titulo:"Digestivos 🥃 ",
        itens:[
            { nome: "Licor Beirão", sub: "", preco: "5,00", un: "/un" },
            { nome: "CRF", sub: "", preco: "5,00", un: "/un" },
            { nome: "Kopke Sabores", sub: "", preco: "8,00", un: "/un" },
            { nome: "Bailey's", sub: "", preco: "5,00", un: "/un" },
            { nome: "Croft", sub: "", preco: "5,00", un: "/un" },
            { nome: "Macieira Cream", sub: "", preco: "5,00", un: "/un" },
            { nome: "Martini", sub: "", preco: "4,00", un: "/un" },
            { nome: "Safari", sub: "", preco: "5,00", un: "/un" },
        ]
    },
    {
        titulo:"Sangrias 🍶 ",
        itens:[
            { nome: "Maracujá", sub: "", preco: "24,00", un: "/un" },
            { nome: "Frutos Vermelhos", sub: "", preco: "24,00", un: "/un" },
            { nome: "Maça Kiwi", sub: "", preco: "24,00", un: "/un" },
            { nome: "Mojito", sub: "", preco: "24,00", un: "/un" },
            { nome: "Copo Sangria", sub: "", preco: "8,00", un: "/un" },
            { nome: "Piña Colada", sub: "", preco: "24,00", un: "/un" },
            { nome: "Melancia", sub: "", preco: "24,00", un: "/un" }
        ]
    }
];

categorias.forEach((cat, index) => {
    // Se a categoria não tiver título (caso da primeira), chamamos-lhe "Cafetaria"
    let tituloBotao = cat.titulo === "" ? "Cafetaria ☕" : cat.titulo;

    // Criamos o botão principal da categoria
    let htmlCategoria = `<button class="botao-acordeao">${tituloBotao}</button>`;
    
    // Criamos a div que vai guardar os itens (esta div começa escondida pelo CSS)
    htmlCategoria += `<div class="conteudo-acordeao">`;
    
    cat.itens.forEach(produto => {
        htmlCategoria += `
            <div class="produto-item">
                <span class="produto-nome">${produto.nome}
                    ${produto.sub ? `<span class="detalhe-produto">${produto.sub}</span>` : ''}
                </span>
                <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
            </div>
        `;
    });
    
    htmlCategoria += `</div>`; // Fechar a div do conteudo-acordeao
    
    // Adicionamos este bloco inteiro ao ecrã
    contentor.innerHTML += htmlCategoria;
});

// === NOVA PARTE: O Motor que faz Deslizar ===
// Vai buscar todos os botões que acabámos de criar
let botoesAcordeao = document.getElementsByClassName("botao-acordeao");

for (let i = 0; i < botoesAcordeao.length; i++) {
    botoesAcordeao[i].addEventListener("click", function() {
        // Alterna uma classe "ativo" para podermos mudar a cor do botão se quisermos
        this.classList.toggle("ativo");
        
        // Vai buscar a div com os itens que está logo a seguir ao botão
        let painel = this.nextElementSibling;
        
        // Se já estiver aberto (com altura), fecha. Se estiver fechado, abre até ao tamanho máximo (scrollHeight)
        if (painel.style.maxHeight) {
            painel.style.maxHeight = null;
        } else {
            painel.style.maxHeight = painel.scrollHeight + "px";
        }
    });
}






