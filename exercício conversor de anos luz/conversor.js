let distancia = prompt("Digite a distância em Anos Luz")
let opc = prompt("Estão disponíveis as seguintes conversões:\n 1-Parsec(pc)\n 2-Unidade astronômica\n 3-Quilômetros\n")

let escolha
let conv

switch(opc){
    case "1":
        escolha = "Parsec"
        conv = distancia * 0.306601
        alert(`Opção ${opc} escolhida.\n o valor convertido é de ${conv} (Pc)`)
        break
    case "2":
        escolha = "Unidade astronômica"
        conv = distancia * 63241.1
        alert(`Opção ${opc} escolhida.\n O valor convertido é de ${conv}(AU)`)
        break
    case "3": 
        escolha = "Quilometros"
        conv = distancia * 9.5 * Math.pow(10,12)
        alert(`Opção ${opc} escolhida.\n O valor convertido é de ${conv}(KM)`)
        break
    default:
        escolha = "Unidade não identificada"
        conv = "Conversão fora do escopo"
        alert(`Opção ${opc} escolhida.\n O valor convertido é de ${conv}`)
        break
}