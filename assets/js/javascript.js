function exibirLanches () {
    document.getElementById("lanche1").style.display = "flex";
    document.getElementById("lanche2").style.display = "flex";
    document.getElementById("combo1").style.display = "none";
}
function exibirCombos () {
    document.getElementById("lanche1").style.display = "none";
    document.getElementById("lanche2").style.display = "none";
    document.getElementById("combo1").style.display = "flex";
}