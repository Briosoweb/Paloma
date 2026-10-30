const contentor = document.getElementById('lista-paloma');

const categorias = [
  {
    titulo: "",
    itens: [
      { nome: "1ª Linha da Praia", sub: "(2x Toalhas, 3x Cadeiras)", preco: "99,99", un: "/dia" },
      { nome: "Extra Cadeira", sub: "", preco: "1,50", un: "/dia" },
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