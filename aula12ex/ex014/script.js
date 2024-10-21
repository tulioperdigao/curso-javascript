
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'src/manha.png'
        document.body.style.background = '#F2D852'
    } else if (hora <= 18) {
        //BOA TARDE!
        img.src = 'src/tarde.png'
        document.body.style.background = '#D9751E'
    } else {
        //BOA NOITE!
        img.src = 'src/noite.png'
        document.body.style.background = '#22403A'
    }
}
