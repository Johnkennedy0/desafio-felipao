// crie uma variavel para armazenar o nome e a quantidade de experiência (xp) de um herói, depois utilize uma
//estrutura de decisão para aprensentar alguma das mensagens abaixo:
// se xp for menor do que 1.00 = ferro se xp for entre 1.001 e 2.000 = bronze 
let = heroi = {
    nome: "Marlon Brando",
    xp: 10000
}
let mensagem = "";

if( heroi.xp >= 0 && heroi.xp < 1000){
    mensagem = "Ferro";
}
else if(heroi.xp >= 1001 && heroi.xp <=2000) {
    mensagem = "bronze"
}else if(heroi.xp > 2000 && heroi.xp <=5000){
    mensagem = "Prata"
}else if(heroi.xp > 5000 && heroi.xp <= 7000){
    mensagem = "Ouro"
}else if(heroi.xp > 7000 && heroi.xp <= 8000){
    mensagem = "Platina"
}else if(heroi.xp > 8000 && heroi.xp <= 9000){
    mensagem = "Ascendente"
}else if(heroi.xp > 9000 && heroi.xp <= 10000){
    mensagem = "Imortal"
}else if(heroi.xp > 10000){
    mensagem = "Radiante"
}else if(heroi.xp < 0){
    mensagem = "Nível desconhecido"}

console.log("O heroi " + heroi.nome + " está no nivel:" + mensagem);

