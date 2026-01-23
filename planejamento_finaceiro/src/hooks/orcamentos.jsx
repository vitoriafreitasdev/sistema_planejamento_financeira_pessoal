
export default function dadosOrcamento(orcamentos, categorias){
    const obj = {}
    const keysCategorias = Object.keys(categorias) 
    
    if (keysCategorias.length > 0) {

        for (let data in categorias){
            categorias[data].forEach((element) => {
              
                if(element.receita_desp === "despesa"){
                    if (!obj[element.categoria]) {
                        obj[element.categoria] = {valor: element.valor, data: element.data}
                    }
                    else {
                        const mesObj = obj[element.categoria].data.split("-")[1]
                        const mesHist = element.data.split("-")[1]
                        if(mesHist == mesObj) 
                        {
                            const valor = parseFloat(element.valor) + parseFloat(obj[element.categoria].valor)
                            obj[element.categoria] =  {valor: valor, data: element.data}
                        }
                        else if(mesHist < mesObj){
                            // se for menor o valor nao muda
                            obj[element.categoria] =  {valor: obj[element.categoria].valor, data: element.data}
                        }
                        else{
                            obj[element.categoria] = {valor: element.valor, data: element.data}
                        }

                    }
                }
            })
        }

        /* 
                calculo de porcentagem
                parte/total x 100
        */
        
        for (const o in obj){
            let porcent
            let restante
            if (o === "moradia") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.moradia ) * 100) 
                restante = Math.floor(orcamentos.moradia - parseFloat(obj[o].valor)) 

            }
            if (o === "transporte") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.transporte ) * 100) 
                restante = Math.floor(orcamentos.transporte - parseFloat(obj[o].valor)) 
            }
            if (o === "alimentacao") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.alimentacao ) * 100) 
                restante = Math.floor(orcamentos.alimentacao - parseFloat(obj[o].valor))             }
            if (o === "Lazer") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.Lazer ) * 100) 
                restante = Math.floor(orcamentos.Lazer - parseFloat(obj[o].valor)) 
            }

            obj[o] = {valor: obj[o].valor, data: obj[o].data, porcentagem: porcent, restante: restante }
        }

    }

    console.log(obj)

    return obj

}