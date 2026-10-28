const contentor = document.getElementById('lista-paloma');

const categorias = [
    {
        titulo: "", 
        itens: [
            { nome: "Espresso", sub: "", preco: "1,20", un: "/un" },
            { nome: "Decaf", sub: "", preco: "1,30", un: "/un" },
            { nome: "Carioca / Lemon Carioca", sub: "", preco: "1,00", un: "/un" },
            { nome: "Pingo Normal (Macchiato)", sub: "", preco: "1,00", un: "/un" },
            { nome: "Pingo Direto", sub: "", preco: "1,25", un: "/un" },
            { nome: "Barley Coffee", sub: "", preco: "1,00", un: "/un" },
            { nome: "Meia de Leite (Small Latte)", sub: "", preco: "1,80", un: "/un" },
            { nome: "Galão (Latte)", sub: "", preco: "1,90", un: "/un" },
            { nome: "Cappuccino", sub: "", preco: "2,20", un: "/un" },
            { nome: "Glass of Milk", sub: "", preco: "1,20", un: "/un" },
            { nome: "Double Lemon Carioca", sub: "", preco: "1,20", un: "/un" },
            { nome: "Various Teas", sub: "", preco: "1,60", un: "/un" },
        ]
    },
    {
        titulo: "Drinks 🥤 ", 
        itens: [
            { nome: "Water 0.50L", sub: "", preco: "1,60", un: "/un" },
            { nome: "Water 1.50L", sub: "", preco: "2,00", un: "/un" },
            { nome: "Sparkling Water", sub: "", preco: "1,80", un: "/un" },
            { nome: "Flavored Sparkling Water", sub: "", preco: "2,00", un: "/un" },
            { nome: "Tonic Water", sub: "", preco: "2,50", un: "/un" },
            { nome: "Le Tribute Tonic Water", sub: "", preco: "3,50", un: "/un" },
            { nome: "Canned Sodas", sub: "", preco: "2,40", un: "/un" },
            { nome: "Fruit Nectars", sub: "", preco: "2,20", un: "/un" },
            { nome: "Red Bull", sub: "", preco: "4,00", un: "/un" },
            { nome: "Fresh Orange Juice", sub: "", preco: "4,00", un: "/un" },
            { nome: "Lemonade", sub: "", preco: "4,00", un: "/un" },
            { nome: "Flavored Lemonade", sub: "", preco: "4,50", un: "/un" },
        ]
    },
    {
        titulo: "Wines 🍷 ",
        itens: [
            { nome: "Tons White Wine", sub: "", preco: "12,00", un: "/un" },
            { nome: "Tons Red Wine", sub: "", preco: "12,00", un: "/un" },
            { nome: "Mateus Rosé/White", sub: "", preco: "12,00", un: "/un" },
            { nome: "Aveleda", sub: "", preco: "12,00", un: "/un" },
            { nome: "Praia", sub: "", preco: "12,00", un: "/un" },
            { nome: "Glass of Wine", sub: "", preco: "4,00", un: "/un" },
        ]
    },
    {
        titulo: "Beer 🍻 ",
        itens:[
            { nome: "Draft Beer (Fino)", sub: "", preco: "2,20", un: "/un" },
            { nome: "Tango / Panaché", sub: "", preco: "2,30", un: "/un" },
            { nome: "Pint of Beer", sub: "", preco: "4,00", un: "/un" },
            { nome: "Super Bock 0.33L", sub: "", preco: "2,00", un: "/un" },
            { nome: "Super Bock Mini", sub: "", preco: "1,60", un: "/un" },
            { nome: "Dark Beer", sub: "", preco: "2,00", un: "/un" },
            { nome: "Non-alcoholic Beer", sub: "", preco: "2,00", un: "/un" },
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
            { nome: "Flavored Caipirinha", sub: "", preco: "8,00", un: "/un" },
            { nome: "Mojito", sub: "", preco: "8,00", un: "/un" },
            { nome: "Flavored Mojito", sub: "", preco: "9,00", un: "/un" },
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
        titulo:"Spirits 🥂",
        itens:[
            { nome: "House Gin", sub: "", preco: "7,00", un: "/un" },
            { nome: "Nordés", sub: "", preco: "10,00", un: "/un" },
            { nome: "Tanqueray Sevilla", sub: "", preco: "10,00", un: "/un" },
            { nome: "House Vodka", sub: "", preco: "7,00", un: "/un" },
            { nome: "Absolut", sub: "", preco: "8,00", un: "/un" },
            { nome: "Bacardi", sub: "", preco: "6,50", un: "/un" },
            { nome: "Bacardi Lemon", sub: "", preco: "6,50", un: "/un" },
            { nome: "Captain Morgan", sub: "", preco: "8,00", un: "/un" },
            { nome: "Santissima Trindade", sub: "", preco: "7,00", un: "/un" },     
            { nome: "House Whiskey", sub: "", preco: "7,00", un: "/un" },
            { nome: "Jack Daniel's", sub: "", preco: "8,00", un: "/un" },
            { nome: "Cardhu", sub: "", preco: "10,00", un: "/un" },
        ]
    },
    {
        titulo:"Digestifs 🥃 ",
        itens:[
            { nome: "Licor Beirão", sub: "", preco: "5,00", un: "/un" },
            { nome: "CRF", sub: "", preco: "5,00", un: "/un" },
            { nome: "Kopke Flavors", sub: "", preco: "8,00", un: "/un" },
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
            { nome: "Passion Fruit", sub: "", preco: "24,00", un: "/un" },
            { nome: "Red Berries", sub: "", preco: "24,00", un: "/un" },
            { nome: "Apple & Kiwi", sub: "", preco: "24,00", un: "/un" },
            { nome: "Mojito", sub: "", preco: "24,00", un: "/un" },
            { nome: "Glass of Sangria", sub: "", preco: "8,00", un: "/un" },
            { nome: "Piña Colada", sub: "", preco: "24,00", un: "/un" },
            { nome: "Watermelon", sub: "", preco: "24,00", un: "/un" }
        ]
        
    }
];

categorias.forEach((cat, index) => {
    // Se a categoria não tiver título (caso da primeira), chamamos-lhe "Coffee & Tea"
    let tituloBotao = cat.titulo === "" ? "Coffee & Tea ☕" : cat.titulo;

    let htmlCategoria = `<button class="botao-acordeao">${tituloBotao}</button>`;
    
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
    
    htmlCategoria += `</div>`;
    
    contentor.innerHTML += htmlCategoria;
});

let botoesAcordeao = document.getElementsByClassName("botao-acordeao");

for (let i = 0; i < botoesAcordeao.length; i++) {
    botoesAcordeao[i].addEventListener("click", function() {
        this.classList.toggle("ativo");
        
        let painel = this.nextElementSibling;
        
        if (painel.style.maxHeight) {
            painel.style.maxHeight = null;
        } else {
            painel.style.maxHeight = painel.scrollHeight + "px";
        }
    });
}



