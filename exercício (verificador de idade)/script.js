function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.getElementById('res')

    if (fano.length == 0 || fano.value > ano) {
        window.alert('ERRO! Confira os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade < 12 && idade >=0) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adlto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade < 12 && idade >= 0) {
                //criança
                img.setAttribute('src', 'garota.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f-40.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Olá, foi detectado que você é ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}