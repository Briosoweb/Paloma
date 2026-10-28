const contentor = document.getElementById('lista-paloma');

const categorias = [
  {
    titulo: "Francesinhas & Cachorros",
    itens: [
      { nome: "Francesinha/Cachorro Trinchado", sub: "", preco: "6,00", un: "/un" },
      { nome: "Francesinha Pão Saloio", sub: "", preco: "6,50", un: "/un" },
      { nome: "Cachorro Pão Saloio", sub: "", preco: "6,50", un: "/un" }
    ]
  },
  {
    titulo: "Pregos, Hambúrgueres & Wraps",
    itens: [
      { nome: "Prego no Pão", sub: "", preco: "8,00", un: "/un" },
      { nome: "Prego no Pão de Frango", sub: "", preco: "7,50", un: "/un" },
      { nome: "Hamburguer", sub: "", preco: "8,00", un: "/un" },
      { nome: "Wrap Vegetariano", sub: "", preco: "6,50", un: "/un" }
    ]
  },
  {
    titulo: "Tostas",
    itens: [
      { nome: "Tosta de Atum", sub: "", preco: "7,00", un: "/un" },
      { nome: "Tosta de Frango", sub: "", preco: "7,00", un: "/un" },
      { nome: "Tosta Mista", sub: "", preco: "4,00", un: "/un" },
      { nome: "Tosta Mista Especial", sub: "", preco: "5,00", un: "/un" },
      { nome: "Tosta Mista Pão Saloio", sub: "", preco: "4,50", un: "/un" }
    ]
  },
  {
    titulo: "Torradas & Croissants",
    itens: [
      { nome: "Torrada", sub: "", preco: "2,00", un: "/un" },
      { nome: "Torrada Manteiga + Compota", sub: "", preco: "3,20", un: "/un" },
      { nome: "Torrada de Pão Saloio", sub: "", preco: "2,80", un: "/un" },
      { nome: "Croissant", sub: "", preco: "2,00", un: "/un" },
      { nome: "Croissant Misto", sub: "", preco: "3,50", un: "/un" }
    ]
  },
  {
    titulo: "Saladas",
    itens: [
      { nome: "Salada de Frango", sub: "", preco: "9,00", un: "/un" },
      { nome: "Salada de Atum", sub: "", preco: "9,00", un: "/un" }
    ]
  },
  {
    titulo: "Para Picar & Diversos",
    itens: [
      { nome: "Açaí", sub: "", preco: "9,00", un: "/un" },
      { nome: "Tremoços/Mistura", sub: "", preco: "1,20", un: "/un" },
      { nome: "Menu Infantil", sub: "", preco: "6,50", un: "/un" },
      { nome: "Extra Dose Batata", sub: "", preco: "2,50", un: "/un" },
      { nome: "Marisco do Dia", sub: "Sob Consulta", preco: "Sob Consulta ", un: "" }
    ]
  }
];

categorias.forEach((cat, index) => { 
    if (index > 0) {
        contentor.innerHTML += `<h2 class="subtitulo-categoria">${cat.titulo}</h2>`;
    }

    cat.itens.forEach(produto => {
        contentor.innerHTML += `
            <div class="produto-item">
                <span class="produto-nome">• ${produto.nome} 
                    ${produto.sub ? `<span class="detalhe-produto">${produto.sub}</span>` : ''}
                </span>
                <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
            </div>
        `; 
    });
});