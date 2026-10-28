const contentor = document.getElementById('lista-paloma');

const categorias = [
  {
    titulo: "",
    itens: [
      { nome: "Comilão", sub: "(Ovos mexidos, tosta de bacate , 2x Sumo De Laranja Natural, 2x Açai)", preco: "99,99", un: "/un" },
      { nome: "Francesinha Pão Saloio", sub: "", preco: "6,50", un: "/un" },
      { nome: "Cachorro Pão Saloio", sub: "", preco: "6,50", un: "/un" }
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