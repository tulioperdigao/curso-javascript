
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo  = document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'src/crianca-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'src/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'src/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'src/idoso-m.png')
            }
        } else if (sexo[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'src/crianca-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'src/jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'src/adulta-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'src/idosa-f.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}
