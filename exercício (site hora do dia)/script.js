function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom Dia, Igor! lembra de por seu nome no final pra testar se sabe fazer isso tbm :)
        img.src ='manha.png'
        document.body.style.background = '#ffd5ac'
    }else if(hora > 12 && hora < 18){
         //boa tarde, Igor!
         img.src = 'tarde.png'
         document.body.style.background = '#ff7850'
    }else{
        //Boa noite, Igor!
        img.src = 'noite.png'
        document.body.style.background = '#1c445e'
    }
}
