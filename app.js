/*variáveis*/
var nome = 'guilherme'
let sobronome = 'lopes' //vamos utilizar essa forma
nomedomeio = 'marques'

let n1 = 2
let n2 = 9.5
let comida = 'maçã'
let fumante = false

console.log(n1,n2,comida,fumante)

/*tipos de dados*/
console.log(typeof n1 ) // 2 é number
console.log(typeof n2 ) // 9.5 é number
console.log(typeof comida ) // 'maçã' é string
console.log(typeof fumante ) // false é boolean

let veiculos = ['carro', 'moto', 'avião'] // array
console.log(typeof veiculos ) // todo array é tipo objet em js

let salvar = function(){

}
console.log(typeof salvar ) // salvar é tipo function

/* estruturas de decisão*/
/*if(condição){
    valor se condição for verdadeira
}else{
    valor se a condição for falsa
 }*/
let nota = 10 
if(nota >= 5){
    console.log("passou")
}else{
    console.log("reprovou")
}

if(nota >=5){ // if sem else
    console.log("parabéns, esta aprovado")
}

if(nota>= 7){// if com + condições
    console.log("aprovado")
}else if(nota >= 5){
    console.log("recuperação")
}else{
    console.log("reprovado")
}
let dia = 5
switch (dia){
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda")
        break
    case 3:
        console.log("terça")
        break
    case 4:
        console.log("quarta")
        break
    case 5:
        console.log("quinta")
        break
    case 6:
        console.log("sexta")
        break
    case 7:
        console.log("sabado")
        break
    default:
        console.log("dia invalido")
}
/* estrutura de repetição */
let contador = 1
while(contador <=10){
    console.log(contador)
    // contador = contador + 1
    contador++
}
for(let contador2 = 10; contador2<=20; contador2++){
    console.log( contador2)
}