function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 6 && hora < 12) {
    img.src = "manha1.png";
    document.body.style.background = "#dec3ac";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde1.png";
    document.body.style.background = "006cff";
  } else if (hora > 18 && hora < 23) {
    img.src = "noite1.png";
    document.body.style.background = "#0b151b"; //esse document.body.style.background eh para trocar a cor de fundo de acordo com o horario
  } else {
    img.src = "madruga1.png";
    document.body.style.background = "#152732";
  }
}
