var idade = 17;
console.log(`voce tem ${idade} anos`);
if (idade < 16) {
  console.log("nao vota"); //detalhe: aq usa console.log la em html eh window.document....; posso usar dentro do console, aspas simples pq n vai ter interpolacao;
} else if (idade < 18 || idade > 65) {
  // vale relembrar: || eh "ou". DISJUNCAO; && eh "e". CONJUNCAO;
  console.log("voto opcional");
} else {
  console.log("voto obrigatorio");
} //aq eh meio q logica, vc poderia ter feito de outra forma, mas assim eh a melhor pq ficou mais simplificado.
