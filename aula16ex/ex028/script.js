let resultado = document.getElementById('resultado')
let list = []

function adicionar() {
    let num = document.getElementById('txtnum')
    let lista = document.getElementById('valores')
    let number = Number(num.value)
    

    if (number == 0 || number > 100 || number.length == 0) {
        window.alert('Digite um número válido!')
    } else {
        resultado.innerHTML = ''
        if (list.indexOf(number) != -1) {
            window.alert('Esse número já foi adicionado!')
        } else {
            let item = document.createElement('option')
            item.text = `Valor ${number} adicionado.`
            list.push(number)
            lista.appendChild(item)
        }
        
    }
    num.value = ''
    num.focus()
}

function analisar() {
    let numerosCadastrados =  list.length
    let maior = 0
    let menor = 0
    let soma = 0
    let media = 0

    if (list.length < 2) {
        window.alert('Digite ao menos 2 valores.')
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i] > maior) {
                maior = list[i]
            } else if (list[i] < maior) {
                menor = list[i]
            }

            soma += list[i] 
        }
        media = soma / list.length
         
        resultado.innerHTML = `Ao todo, temos ${numerosCadastrados} números cadastrados. <br>
        O maior valor informado foi ${maior}. <br>
        O menor valor informado foi ${menor}. <br>
        Somando todos os valores, temos ${soma}. <br>
        A média dos valores digitados é ${media}.`
    }
    
}