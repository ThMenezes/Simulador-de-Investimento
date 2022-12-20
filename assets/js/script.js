const resultado1 = document.getElementById('resultado1')
const resultado2 = document.getElementById('resultado2')
const resultado3 = document.getElementById('resultado3')
const calcular = document.getElementById('calcular')

function calcularJuros() {
    let capitalInicial = parseFloat(document.getElementById('capital-inicial').value)
    let valorMensal = parseFloat(document.getElementById('valor-mensal').value)
    let taxaJuros = parseFloat(document.getElementById('taxa-juros').value)
    let periodo = parseFloat(document.getElementById('periodo').value)

    let valorMontante = capitalInicial + valorMensal + periodo;

    let jurosCompostos = 0;
    let jurosCompostoTotal = 0;

    for (let i =0; i < periodo; i++) {
        jurosCompostos = (capitalInicial * taxaJuros) / 100;
        jurosCompostoTotal += jurosCompostos;
        capitalInicial += jurosCompostos + valorMensal;
    }

    let valorTotal = valorMontante + jurosCompostoTotal;

    //formatação de texto//
    let formatacaoValorMontante = new Intl .NumberFormat("pt-BR", {
        style: "currency", currency: "BRL",
    }).format(valorMontante)

    let formatacaoJurosCompostoTotal = new Intl .NumberFormat("pt-BR", {
        style: "currency", currency: "BRL",
    }).format(jurosCompostoTotal)

    let formatacaoValorTotal = new Intl .NumberFormat("pt-BR", {
        style: "currency", currency: "BRL",
    }).format(valorTotal)
    
    resultado1.textContent = `${formatacaoValorMontante}`
    resultado2.textContent = `${formatacaoJurosCompostoTotal}`
    resultado3.textContent = `${formatacaoValorTotal}`
}

calcular.addEventListener("click", calcularJuros)

// mostrar resultados //

calcular.addEventListener("click", () => {
    let resultado = document.querySelectorAll(".container-resultado")
    resultado.forEach((item) => {
        item.classList.add("active")
    })
})

// apagar resultado //

let limpar = document.getElementById("limpar")

limpar.addEventListener("click", ()=> {
    let resultado = document.querySelectorAll(".container-resultado")
    resultado.forEach((item) => {
        item.classList.remove("active")
    })
    
    let capitalInicial = document.getElementById('capital-inicial')
    let valorMensal = document.getElementById('valor-mensal')
    let taxaJuros = document.getElementById('taxa-juros')
    let periodo = document.getElementById('periodo')
    capitalInicial.value = ""
    valorMensal.value = ""
    taxaJuros.value = ""
    periodo.value = ""
})