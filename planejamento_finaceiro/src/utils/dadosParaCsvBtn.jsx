/* eslint-disable no-unused-vars */

// funcao que ajusta os dados para o Csv
export default function  dadosParaCsvBtn(labels, receita, despesa){

     return labels.map((data) => (
          {
               data,
               receita: receita[data] || "Não disponível",
               despesa: despesa[data] || "Não disponível"
          }
     ))
     
}
