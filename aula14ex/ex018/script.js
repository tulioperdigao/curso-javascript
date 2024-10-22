
function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lengt == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br><br>'
        let start = Number(inicio.value)
        let end = Number(fim.value)
        let step = Number(passo.value)
        
        if (step <= 0) {
            window.alert('PASSO INVÀLIDO! Considerando PASSO 1.')
            step = 1
        }

        if (start < end) {
            for (let i = start; i <= end; i += step) {
                resultado.innerHTML += `${i} \u{1F449}`            
            }
        } else {
            for (let i = start; i >= end; i -= step) {
                resultado.innerHTML += `${i} \u{1F449}`
            }
        }
        

        resultado.innerHTML += `\u{1F3C1}`

    }
}
