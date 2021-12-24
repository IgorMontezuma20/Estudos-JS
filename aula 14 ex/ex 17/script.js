function result() {
    var num = Number(document.getElementById ('val').value)
    var n = document.getElementById('out')
    var out = document.getElementById('seltab')
    var nulo = ('')
    
    if (num ==  nulo) {
        alert('Por favor, reinicie a aba digite um número válido!')
        saida.innerHTML = `<h2> Nenhum valor foi digitado.</n>`
    } else {
        
        var n = Number(num)
        var c = 1
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            out.appendChild(item)
            c++
        }
       /*  for(var c = 1; c <= 10; c++)
    var item = document.createElement('option')
    item.text = `${num} x ${c} = ${num * c}`
    tab.appendChild(item)*/
    } 
    
}