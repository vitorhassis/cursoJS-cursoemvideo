function tabuada() {
  var num = document.getElementById("txtn");
  var tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    window.alert("[ERR0]. Preencha o espaço e tente novamente!");
  } else {
    var n = Number(num.value); //var n e var c sao diferentes. VAR N =  eh a variavel que vai possuir um valor atribuido pelo usuário. VAR C = vc primeiro atribui um valor para ela, esse caso 1. Usando FOR (o primeiro espaço do parenteses, condiz onde o valor do contador vai começar, ou seja, ele vai começar no 1;) (o segundo espaço nos diz até onde o contador vai. nesse caso até o numero 10; (e o terceiro espaço vc indica como sera a procedência/como esse contador, que vai de 1 até o 10, será sequenciado. nesse caso, o contador vai do 1 ate o 10 somando +1, por isso o uso do c++ (c+1))
    var c = 1;
    tab.innerHTML = ""; //n entendi muito bem. mas basicamente eh para "antes de começar a tabuada, limpar o espaço do tab/espaco do seletor, pra n ficar acumulado as operações"
    for (c = 1; c <= 10; c++) {
      var item = document.createElement("option"); //poderia termos criado la no html, mas criamos por aq. nesse caso, cada "option" refere-se a cada uma das linhas presentes. acredito q no html teria que fazer o processo escrito la ate 10.

      item.text = `${n} x ${c} = ${n * c}`; //interpolação. entender que nesse caso, vc quer que apareça realmente a multiplicaçãozinha e depois o resultado. até pq essa é a ideia do exercicio -tabuada-, e depois na frente mostrar o resultado. igual vc faria numa folha de papel para explicar para alguem, por ex. OBS = ITEM.TEXT = parte de DENTRO da option (var item.text)

      tab.appendChild(item); //o append.Child eh oq permite aparecer de fato todo o script. y.appendchild(x) = "adicionar um elemento filho, que vai ser o (x)". o y seria a variavel do que voce quer q apareca, nesse caso, queremos que apareca todo o script que criamos para a variavel tab (que por sua vez, eh o seletor))
    }
    /* usando while fica: 
     while (c <= 10) {
     
      var item = document.createElement("option"); 
      item.text = `${num} x ${c} = ${num * c}`;
      tab.appendChild(item);
      c++;
      */
  }
}
