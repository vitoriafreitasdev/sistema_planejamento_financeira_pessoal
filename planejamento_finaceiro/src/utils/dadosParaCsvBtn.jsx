
export default function  dadosParaCsvBtn(receitaTotal, totalDespesas, saldoAtual){
     
     // Aqui fazer um objeto javascript que vai ter toda a receita registrada e todas despesas registradas

     const dados = {
          receita: receitaTotal,
          despesa: totalDespesas,
          saldo_atual: saldoAtual
     }

     return dados
}

