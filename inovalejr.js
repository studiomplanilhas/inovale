function criarBotoes() {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const container = document.getElementById('calendarContainer');

    meses.forEach((mes) => {
        const button = document.createElement('button');
        button.textContent = mes;
        button.onclick = function () {
            redirecionar('https://link-' + mes.toLowerCase());
        };
        button.style.fontSize = '18px';
        button.style.backgroundColor = '#e65e0e';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.width = '100%';
        button.style.height = '50px';

        container.appendChild(button);
    });
}

function redirecionar(link) {
    window.location.href = link;
}

window.onload = criarBotoes;
