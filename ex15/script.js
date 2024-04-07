function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        document.body.style.background = "#404040";
        img.setAttribute("src", "menino1.png");
      } else if (idade < 50) {
        document.body.style.background = "#00afaf";
        img.setAttribute("src", "homem1.png");
      } else {
        img.setAttribute("src", "idoso1.png");
        document.body.style.background = "#cdc8c1";
      }
    }
    if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        document.body.style.background = "#836e5d";
        img.setAttribute("src", "menina1.png");
      } else if (idade < 50) {
        document.body.style.background = "#8bba88";
        img.setAttribute("src", "mulher1.png");
      } else {
        document.body.style.background = "#cdc8c1";
        img.setAttribute("src", "velha1.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img); //p aparecer a img
  }
}
