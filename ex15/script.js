function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var img = window.document.getElementById("imagem");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value); // var idade vai ser o ano - valor que vai ser colocado dentro da fano, que eh la a caixinha da idade, ou seja, Number(fano.value)
    var genero = "";
    var img = document.createElement("img"); //aq e na linha de baixo, em vez de irmos la no html e criar uma div com id, e uma img dentro dessa div (oq fizemos no ex14, basicamente) criamos ja a tag com a id aqui no JS. segue a linha 13 e 14!
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      //esse [0] faz referencia a primeira alt de bolinha marcada
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menino1.png"); //esse img.setAttribute eh utilizado quando criamos a tag e id aq pelo js (explicacao linha 13)
        //crianca
      } else if (idade < 50) {
        img.setAttribute("src", "homem1.png");
        //jovem
      } else {
        img.setAttribute("src", "idoso1.png");
        //idoso
      }
    } else if (fsex[1].checked) {
      //esse [1] seria a segunda alt de bolinha marcada
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menina1.png");
        //crianca
      } else if (idade < 50) {
        img.setAttribute("src", "mulher1.png");
        //jovem
      } else {
        img.setAttribute("src", "velha1.png");
        //idosa
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos um/uma ${genero} com ${idade} anos.`;
    res.appendChild(img); //isso eh para adicionar oq vc quer. nesse caso img
  }
}
