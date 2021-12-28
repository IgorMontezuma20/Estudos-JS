let nave = {
    nome: "",
    tipo: "",
    velMaxima: 0,
    velIni: 0,
    velAtual: 0
}
let menu
let para = true;

function acelerar(acelera){
    if(acelera > nave.velMaxima){
        alert("Velocidade excede o limite.")
    }else{
    velAtual = nave.velIni += acelera;
    return velAtual
    }
}
function parar(para){
    if(velAtual == 0){
        alert("A nave está parada, este procedimento não pode ser efetuado.")
    }else{

    alert("A nave está reduzindo sua velocidade para parar.")
    alert("A nave está parada.")
    velAtual = 0;
    }

}

let nomePrompt = prompt("Qual o nome da nave? ")
nave.nome = nomePrompt
let tipoNave = prompt("Qual é o tipo da nave? ")
nave.tipo = tipoNave
let veloMax = prompt("Qual é a velocidade maxima permitida pelo fabricante? ")
nave.velMaxima = veloMax
alert("Dados da nave: \nNome: "+nave.nome+"\nTipo: "+nave.tipo+"\nVelocidade Máxima: "+nave.velMaxima+"km/s")
do{
menu = prompt("Oque você deseja?\n-------------\nAcelerar = 1\nParar = 2\nFechar menu = 0\n-------------")

switch(menu){

    case "1":
        let acelera = prompt("O quanto você deseja acelerar? ")
        acelerar(parseInt(acelera))
        alert(`A nave ${nave.nome} acelerou e agora está com ${velAtual}km/s`)
    break;

    case "2":
        parar()
        
    break;
}
alert("Dados da nave: \nNome: "+nave.nome+"\nTipo: "+nave.tipo+"\nVelocidade Máxima: "+nave.velMaxima+"km/s\nVelocidade Atual: "+velAtual+"km/s")
}while(menu != "0")
