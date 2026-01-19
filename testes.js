

const objeto = {
  "chave": {
    valor: "tal exemplo"
  }
}
// console.log("chave2" in objeto)

const obj = "chave2"
objeto.chave.nome = "ola"
objeto[obj] = []

// console.log(objeto)


const teste = {
  "2025-01-01": [
    {
      categoria: "1",
      receita_desp: "2",
      valor: 244,
      descricao: "descricao1",
      data: "2025-01-01"
    }
  ],
  "2025-02-01": [
    {
      categoria: "3",
      receita_desp: "4",
      valor: 242,
      descricao: "descricao2",
      data: "2025-02-01"
    }
  ],
  "2025-03-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-04-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-05-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-06-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-07-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-08-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-09-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-10-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ],
  "2025-11-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ]
    ,
  "2025-12-01": [
    {
      categoria: "4",
      receita_desp: "5",
      valor: 244,
      descricao: "descricao3",
      data: "2025-03-01"
    },
    ]
    
}

const tam = Object.keys(teste).length
const newKeys = Object.keys(teste).slice(6, 12)


const filteredObject = Object.fromEntries(
  Object.entries(teste).filter(([key, value]) => {
    return newKeys.includes(key);
  })
);

console.log(filteredObject)

// for(chave in teste){
//  teste[chave].forEach((element) => {
//   console.log(element)
//  });
// }


const arr = ["2025-01-10", "2025-02-02", "2025-01-04"]
arr.sort((a, b) => a.localeCompare(b))
//console.log(arr)



{/* <button onClick={() => dispatch(teste(10))}>Adicionar Valor 10</button> */}

  // const contador = useSelector((state) => state.sistema.contador)
  // const dispatch = useDispatch()

  // import {useSelector, useDispatch} from "react-redux"
//import { teste } from "../redux/slices/sistemaSlice"




// const [chartData] = useState({
//     labels: Data.map((data) => data.year), 
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: Data.map((data) => data.userGain),
//         backgroundColor: [
//         "rgba(75,192,192,1)",
//         "#ecf0f1",  // ← CORRIGIDO
//         "#50AF95",
//         "#f3ba2f",
//         "#2a71d0"
//         ],
//         borderColor: "green",
//         borderWidth: 2
//       },
//     {
//         label: "Users Lost",
//         data: Data.map((data) => data.userLost),
//         backgroundColor: "rgba(255,99,132,0.4)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 2,
//         tension: 0.4
//     }
//     ]
//   });
  
//   const [despesa] = useState({
//     labels: Despesas.map((data) => data.category),
//     datasets: [
//       {
//         label: "Despesas por Categoria",
//         data: Despesas.map((data) => data.porcent),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",  
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0"
//         ],
//         borderColor: "green",
//         borderWidth: 2
//       }
//     ]
//   })

//   const [realiz] = useState({
//     labels: Orcament_Realizado.map((data) => data.category),
//     datasets: [
//       {
//         label: "Realizado",
//         data: Orcament_Realizado.map((data) => data.orcament),
//         backgroundColor: [
//           "rgb(16, 124, 6)",
//           "#196125",  
//           "#26861d",
//           "#5df32f",
//         ],
//         borderColor: "green",
//         borderWidth: 2
//       },
//       {
//         label: "Orçamento",
//         data: Orcament_Realizado.map((data) => data.gasto),
//         backgroundColor: [
//           "rgb(216, 14, 0)",
//           "rgb(70, 16, 16)",  
//           "#971616",
//           "#f04848",
//         ],
//         borderColor: "red",
//         borderWidth: 2
//       }
//     ]
//   })