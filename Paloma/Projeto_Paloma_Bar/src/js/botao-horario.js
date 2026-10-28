function verificarHorario() {
    const botao = document.getElementById('botao-brunch');
    
    if (!botao) return; 

    const horaAtual = new Date().getHours();
    if (horaAtual >= 6 && horaAtual < 14) {
        botao.style.display = 'inline-block';
    } else {
        botao.style.display = 'none';
    }
}

verificarHorario();
setInterval(verificarHorario, 60000);