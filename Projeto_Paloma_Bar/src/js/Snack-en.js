const contentor = document.getElementById('lista-paloma');

const categorias = [
  {
    titulo: "Francesinhas & Hot Dogs",
    itens: [
      { nome: "Sliced Francesinha / Hot Dog", sub: "", preco: "6,00", un: "/un" },
      { nome: "Francesinha in Artisan Bread", sub: "", preco: "6,50", un: "/un" },
      { nome: "Hot Dog in Artisan Bread", sub: "", preco: "6,50", un: "/un" }
    ]
  },
  {
    titulo: "Beef Sandwiches, Burgers & Wraps",
    itens: [
      { nome: "Beef Sandwich (Prego)", sub: "", preco: "8,00", un: "/un" },
      { nome: "Chicken Sandwich", sub: "", preco: "7,50", un: "/un" },
      { nome: "Burger", sub: "", preco: "8,00", un: "/un" },
      { nome: "Vegetarian Wrap", sub: "", preco: "6,50", un: "/un" }
    ]
  },
  {
    titulo: "Toasted Sandwiches",
    itens: [
      { nome: "Tuna Toasted Sandwich", sub: "", preco: "7,00", un: "/un" },
      { nome: "Chicken Toasted Sandwich", sub: "", preco: "7,00", un: "/un" },
      { nome: "Ham & Cheese Toasted Sandwich", sub: "", preco: "4,00", un: "/un" },
      { nome: "Special Ham & Cheese Toasted Sandwich", sub: "", preco: "5,00", un: "/un" },
      { nome: "Ham & Cheese in Artisan Bread", sub: "", preco: "4,50", un: "/un" }
    ]
  },
  {
    titulo: "Toast & Croissants",
    itens: [
      { nome: "Buttered Toast", sub: "", preco: "2,00", un: "/un" },
      { nome: "Toast with Butter & Jam", sub: "", preco: "3,20", un: "/un" },
      { nome: "Artisan Bread Toast", sub: "", preco: "2,80", un: "/un" },
      { nome: "Croissant", sub: "", preco: "2,00", un: "/un" },
      { nome: "Ham & Cheese Croissant", sub: "", preco: "3,50", un: "/un" }
    ]
  },
  {
    titulo: "Salads",
    itens: [
      { nome: "Chicken Salad", sub: "", preco: "9,00", un: "/un" },
      { nome: "Tuna Salad", sub: "", preco: "9,00", un: "/un" }
    ]
  },
  {
    titulo: "Snacks & Extras",
    itens: [
      { nome: "Açaí", sub: "", preco: "9,00", un: "/un" },
      { nome: "Lupin Beans / Nut Mix", sub: "", preco: "1,20", un: "/un" },
      { nome: "Kids Menu", sub: "", preco: "6,50", un: "/un" },
      { nome: "Extra Portion of Fries", sub: "", preco: "2,50", un: "/un" },
      { nome: "Seafood of the Day", sub: "Market Price", preco: "Market Price ", un: "" }
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