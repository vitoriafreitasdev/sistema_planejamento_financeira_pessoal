
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
                        console.log("Obj: ",element.categoria, ": ", mesObj)

                        const mesHist = element.data.split("-")[1]
                        console.log("Hist: ", element.categoria, ": ", mesHist)

                        if(mesHist == mesObj) 
                        {
                            const valor = parseFloat(element.valor) + parseFloat(obj[element.categoria].valor)
                            obj[element.categoria] =  {valor: valor, data: element.data}
                        }
                        else{
                            obj[element.categoria] = {valor: element.valor, data: element.data}
                        }
                    }
                }
            })
        }

    }

    return obj

}