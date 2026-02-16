//Organizando o array de orcamentos em ordem alfabetica

// const orcamentoOrganizado = orcamentos.sort((a, b) => a.localeCompare(a, b))

// let arrOrdenado = ["alimentacao", "Lazer", "moradia", "transporte"]
// const orcamentoOrdenado = {}

// orcamentoOrganizado.forEach((dado) => {

//     if (dado.alimentacao) orcamentoOrdenado[arrOrdenado[0]] = dado.alimentacao
//     if (dado.Lazer) orcamentoOrdenado[arrOrdenado[1]] = dado.Lazer
//     if (dado.moradia) orcamentoOrdenado[arrOrdenado[2]] = dado.moradia
//     if (dado.transporte) orcamentoOrdenado[arrOrdenado[3]] = dado.transporte
// });

// //Organizando o array de categorias em ordem alfabetica
// const categoriaOrganizado = categorias.sort((a, b) => a.localeCompare(a, b))

// const categoriaOrdenada = {}


// if (Object.keys(categorias[0]).length > 0) {
    
//     if (categoriaOrganizado[0].alimentacao) categoriaOrdenada[arrOrdenado[0]] = categoriaOrganizado[0].alimentacao.valor
//     if (categoriaOrganizado[0].Lazer) categoriaOrdenada[arrOrdenado[1]] = categoriaOrganizado[0].Lazer.valor
//     if (categoriaOrganizado[0].moradia) categoriaOrdenada[arrOrdenado[2]] = categoriaOrganizado[0].moradia.valor
//     if (categoriaOrganizado[0].transporte) categoriaOrdenada[arrOrdenado[3]] = categoriaOrganizado[0].transporte.valor


//     const obj = {}

//     if (categoriaOrdenada.Lazer) console.log(categoriaOrdenada.Lazer)
    

// }

// return 0

const obj = {
    "lazer": {valor: 10, data: "29/12"}
}

console.log(obj["lazer"].data)

const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês inicia em 0
const ano = data.getFullYear();
const dataAtual = `${dia}/${mes}/${ano}`;
console.log(dataAtual); // Ex: "28/01/2026" [3, 8]


console.log(Math.floor((1000/80000) * 100))
