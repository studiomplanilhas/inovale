// Redirecionar para o Link 1 ao clicar no Botão 1
function planilhaInovale() {
    window.location.href = "https://docs.google.com/spreadsheets/d/1rUyPhy5Tew-jjBdxDn-WRBkAwYrluRsYv9WFog67PZ0/edit#gid=1556452013";
}

// Redirecionar para o Link 2 ao clicar no Botão 2
function canvaAdmFinanceiro() {
    window.location.href = "https://www.canva.com/folder/FAFar1_ZD9Y";
}

// Redirecionar para o Link 3 ao clicar no Botão 3
function recibos() {
    window.location.href = "https://www.canva.com/design/DAFawEarsOk/_Rrxiwvvs62sOLWWtb6kVg/edit";
}

// Redirecionar para o Link 4 ao clicar no Botão 4
function pipefy() {
    window.location.href = "https://app.pipefy.com/organizations/164775";
}

// Redirecionar para o Link 5 ao clicar no Botão 5
function documentosDrive() {
    window.location.href = "https://drive.google.com/drive/u/1/folders/15NmoQEDFeuUXnQUaIAK9dzMGG_RNkNFF";
}

// Redirecionar para o Link 6 ao clicar no Botão 6
function documentosGerais() {
    window.location.href = "https://drive.google.com/drive/u/1/folders/1nX11M6KOu8jxC27n6cFci7DmtTCbZn3R";
}

document.getElementById("entrarButton").addEventListener("click", function() {
    // Oculta o botão "Entrar"
    document.getElementById("entrarButton").style.display = "none";
    // Mostra os outros botões
    document.getElementById("botoesAposEntrar").style.display = "flex";
});
