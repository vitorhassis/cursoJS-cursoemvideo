function contar() {
  //aq em cima, criamos uma variavel pra cada bgl q vai usar

  var start = document.getElementById("ini");
  var end = document.getElementById("fim");
  var passo = document.getElementById("pass");
  var res = document.getElementById("res"); //essa parte eu tbm esqueci, tem q criar uma div la em html e adicionar a var dela aq, q eh meio q ONDE VAI APARECER o resultado em js. lembre-se: div = caixa.

  /*SEMPRE IMPORTANTE COMECAR COM ESSA PARTE, que eh para basicamente notificar um erro ao usuario caso ele nao preencha os campos do start e do end, ou seja, as caixas de inicio ou fim. o if abaixo se le assim = "se tiver um total de 0 caracteres dentro do start (LENGTH = COMPRIMENTO/QUANTAS LETRAS ESTIVEREM DENTRO) E (sinal de duas barrinhas "||") se tiver um total de 0 caracteres dentro da caixa end {
   dê o alerta (`aq escolhemos um alerta, escrevemos o alerta!`) 
 }
 */

  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Preencha corretamente os valores e tente novamente.");
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "contando: <br>"; //aq eh o seguinte. la em html na linha 34, em preparando a contagem, esse "preparando contagem" vai estar visivel logo de cara qnd vc abrir o site, ou seja, qnd n tiver valor ali. apartir do momento em q as caixas forem devidamente preenchidas com os numeros, (no caso o motivo desse else visto q o if de cima eh pra inibir q as caixas fiquem vazias), vai aparecer essa mensagem abaixo (contando)

    //criamos uma outra variavel referente aos valores, pertencem a cada variavel, convertidos em valores NUMERICOS
    var s = Number(start.value); //essa parte aq, vc tem q lembrar de converter o valor que sera inserido dentro das caixas, para NUMERO. (valor eh diferente de numero).
    var e = Number(end.value);
    var p = Number(passo.value);
    if (p <= 0) {
      /* aq tivemos q criar um if com o proposito de q se o usuario colocar p com valor numerico 0, dar um window alert falando q eh invalido, e que o valor sera substituido por 1*/ window.alert(
        "Passo inválido. Considerando PASSO 1"
      );
      p = 1;
    }
    if (s < e) {
      /*ou seja, se o valor final for maior q o inicial vai promover essa contagem CRESCENTE. pq pode ser tbm uma contagem DECRESCENTE, e por isso vamos ter q criar tbm um else*/
      for (
        var c = s;
        c <= e;
        c += p // lendo fica: for(valor do contador vai ser ser o do start; enquanto o valor numerico do contador(que eh o start) for menor ou igual ao valor numerico end); o contador vai receber o valor numerico dele somado ao valor numerico do passo;
      )
        res.innerHTML += ` - ${c}  \u{1F449}`; //linha 21, vc atribuiu a frase contando para a res.innerHTML, por isso vc adiciona ela ( += ) com o valor final do contador (usa ` ` por causa da interpolação)
    } else {
      for (var c = s; c >= e; c -= p) {
        // ou seja, (c vai começar no start; e enquanto ele for  MAIOR ou igual ao end; o contador vai receber o valor numerico dele subtraindo ao valor numerico do passo;)
        res.innerHTML += ` - ${c} \u{1F449} `;
      }
    }
    res.innerHTML += `\u{1F3C1}`; //essas duas partes de u{XXXXX} aq e na linha 45 e 41, eh emoji
  }
}
