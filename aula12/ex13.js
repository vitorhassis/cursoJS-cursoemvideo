var agora = new Date();
var diaSem = agora.getDay(); //o outro era agora.getHours, esse eh agora.getDay, ou seja, ele te da o dia em que esta sendo rodado o codigo no cliente;
/*
 0=DOMINGO
 1=SEGUNDA
 2=TERCA 
 3=QUARTA
 4=QUINTA
 5=SEXTA
 6=SABADO
 */

console.log(diaSem);
//qnd executamos aq, ele aparece no console o numero do dia. mas seria melhor se em vez de numeros, ele ja escrevesse o dia. para isso vc pode pensar "so usar if e else, mas daria mt trabalho. ai q entra o SWITCH, ele facilita nesses casos (situacoes pontuais. caso for 1, ou 2, ou 3...)!"

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terca");
    break;
  case 3:
    console.log("quarta");
    break;
  case 4:
    console.log("quinta");
    break;
  case 5:
    console.log("sexta");
    break;
  case 6:
    console.log("sabado");
    break;
  default:
    console.log("[ERRO] dia invalido!");
    break;
}

//se vc n coloca o break, e por ex, o valor eh 5. ele vai la no case 5, le oq ta dentro, ou seja, le o console e escreve "sexta", dps ele vai ler o case 6 e o default. por isso a importancia do break.
