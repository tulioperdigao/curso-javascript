
function calcular() {
    let num = document.getElementById('txtnum')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('Nenhum número selecionado :(')
    } else {
        let number = Number(num.value)
        tabuada.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${number} x ${i} = ${i * number}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
    }
}

