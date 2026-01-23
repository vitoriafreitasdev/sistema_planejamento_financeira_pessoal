
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
                            obj[element.categora] =  {valor: obj[element.categoria].valor, data: element.data}
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
            if (o === "moradia") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.moradia ) * 100) 
            }
            if (o === "transporte") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.transporte ) * 100) 
            }
            if (o === "alimentacao") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.alimentacao ) * 100) 
            }
            if (o === "Lazer") {
                porcent = Math.floor((parseFloat(obj[o].valor) / orcamentos.Lazer ) * 100) 
            }

            obj[o] = {valor: obj[o].valor, data: obj[o].data, porcentagem: porcent }
        }

    }


    return obj

}