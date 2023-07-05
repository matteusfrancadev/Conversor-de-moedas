let heightPage = document.body.scrollHeight;
window.scrollTo(0, heightPage);

const button = document.querySelector('.main-button')
const selectCurrency = document.querySelector('.main-select')
const label = document.querySelector('#label-currency')
const imageCurrency = document.querySelector('.img-style-currency')
const inputFormat = document.querySelector('.input-format')

function valueConvert() /* CALCULA EM TEMPO REAL E FAZ O CALCULO DA MOEDA */ {
    const input = document.querySelector('#main-input').value
    const currencyValueToConvert = document.querySelector('.value-real')
    const currencyValueToConverted = document.querySelector('.currency-converted')

    let dolarToday
    let euroToday
    let libraToday
    let dolarTodayCad

    if (selectCurrency.value == 'dolar') {
       
       dolarToday = (fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(resposta => {
            return (resposta.json())
        }).then(corpo => {
            currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD'
            }).format(input / corpo.USDBRL.bid)
        }))
      
    }

    if (selectCurrency.value == 'euro') {
        euroToday = (fetch('https://economia.awesomeapi.com.br/last/EUR-BRL').then(resposta =>{
            return(resposta.json())
        }).then(corpo => {
            currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(input / corpo.EURBRL.bid)
        }))

    }

    if (selectCurrency.value == 'libra') {
        libraToday = (fetch('https://economia.awesomeapi.com.br/last/GBP-BRL').then(resposta =>{
            return(resposta.json())
        }).then(corpo => {
            currencyValueToConverted.innerHTML = new Intl.NumberFormat('uk-UK', {
                style: 'currency',
                currency: 'GBP'
            }).format(input / corpo.GBPBRL.bid)
        }))

    }

    if (selectCurrency.value == 'dolarcad') {
        dolarTodayCad = (fetch('https://economia.awesomeapi.com.br/last/CAD-BRL').then(resposta =>{
            return (resposta.json())
        }).then(corpo =>{
            currencyValueToConverted.innerHTML = new Intl.NumberFormat('fr-CA', {
                style: 'currency',
                currency: 'CAD'
            }).format(input / corpo.CADBRL.bid)
        }))


    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(input)


}

function changeConvert() /* CONVERTE AS IMAGENS E O NOME DA MOEDA */{

    if (selectCurrency.value == 'dolar') {
        label.innerHTML = 'Dólar Americano'

        imageCurrency.src = './eua.png'
    }

    if (selectCurrency.value == 'euro') {
        label.innerHTML = 'Euro'

        imageCurrency.src = './euro.png'
    }

    if (selectCurrency.value == 'libra') {
        label.innerHTML = 'Libra Estelina'

        imageCurrency.src = './libra.png'
    }

    if (selectCurrency.value == 'dolarcad') {
        label.innerHTML = 'Dólar Canadense'

        imageCurrency.src = './dolarcad.png'
    }
    valueConvert()
}

selectCurrency.addEventListener('change', changeConvert)
button.addEventListener('click', valueConvert)


