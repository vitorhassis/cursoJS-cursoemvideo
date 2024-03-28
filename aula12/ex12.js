var agora = new Date(); //isso da var agora e new date, eh para ser em tempo atual
var horas = agora.getHours;
console.log(`agora sao ${horas} horas`);
if (horas > 6 && horas < 12) {
  console.log("bom dia. este horario indica um periodo matutino");
} else if (horas >= 12 && horas < 18) {
  console.log("boa tarde. este horario indica um periodo vespertino");
} else if (horas >= 18 && horas <= 23) {
  console.log("boa noite. este horario indica um periodo noturno");
} else if (horas >= 1 && horas < 6) {
  console.log("boa madrugada. este horario indica um periodo noturno");
}
