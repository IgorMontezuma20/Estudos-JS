function contar() {
    var inicio = document.getElementById('txtini').value
    var fim = document.getElementById('txtfi').value
    var passo = document.getElementById('txtpa').value
    var res = document.getElementById('res')
    console.log(inicio)
    console.log(fim)
    console.log(passo)
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('ERRO! Digite um valor válido')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <=0 ){
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //crescente
            for(var c = i; c <= f; c++){
                res.innerHTML += `${c} -> `
            }
            res.innerHTML += ` FIM!`
        }else{
            //decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} ->`
            }
            res.innerHTML += ` FIM!`
        }
        
    }
    
    
}