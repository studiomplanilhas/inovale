function criarBotoes() {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const links = [
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edita",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit",
        "https://www.canva.com/design/DAFr6jmAg4A/EM4HKNR-JbFzfNRdwb19yQ/edit"
    ];
    const container = document.getElementById('calendarContainer');

    meses.forEach((mes, index) => {
        const button = document.createElement('button');
        button.textContent = mes;
        button.onclick = function () {
            redirecionar(links[index]);
        };
        container.appendChild(button);
    });
}

function redirecionar(link) {
    window.location.href = link;
}

window.onload = criarBotoes;
