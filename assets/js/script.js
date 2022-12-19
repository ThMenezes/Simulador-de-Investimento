const resultado1 = document.getElementById('resultado1')
const resultado2 = document.getElementById('resultado2')
const resultado3 = document.getElementById('resultado3')
const calcular = document.getElementById('calular')

function calcularJuros() {
    let capitalInicial = parseFloat(document.getElementById('capital-inicial').value)
    let valorMensal = parseFloat(document.getElementById('valor-mensal').value)
    let taxaJuros = parseFloat(document.getElementById('taxa-juros').value)
    let periodo = parseFloat(document.getElementById('periodo').value)

    let valorMontante = capitalInicial + valorMensal + periodo;

    let jurosCompostos = 0;
    let jurosCompostoTotal = 0;

    for (let i =0; i < meses; i++) {
        jurosCompostos = (capitalInicial * taxaJuros) / 100;
        jurosCompostoTotal += jurosCompostos;
        capitalInicial += jurosCompostos + valorMensal;
    }

    let valorTotal = valorMontante + jurosCompostoTotal;

    //formatação de texto//
    let formatacaoValorMontante = new Intl .NumberFormat("pt-BR", {
        style: "currency", currency: "BTL",
    }).format(valorMontante)

    let formatacaoJurosCompostoTotal = new Intl .NumberFormat("pt-BR", {
        style: "currency", currency: "BTL",
    }).format(jurosCompostoTotal)

    let formatacaoValorTotal = new Intl .NumberFormat("pt-BR", {
        style: "currency", currency: "BTL",
    }).format(valorTotal)
    
    resultado1.textContent = `${formatacaoValorMontante}`
    resultado2.textContent = `${formatacaoJurosCompostoTotal}`
    resultado3.textContent = `${formatacaoValorTotal}`
}

calcular.addEventListener("click", calcularJuros);