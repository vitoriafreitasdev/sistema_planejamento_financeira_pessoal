// tentar fazer isso so que contando mensamente em vez do total de gastos, mudar no slice da categoria de gastos, adicionar a data, alem do valor e porcentagem

export default function dadosOrcamento(orcamentos, categorias){
    
    const obj = {}
    const keysCategorias = Object.keys(categorias) 

    if (keysCategorias.length > 0) {

        if (orcamentos.alimentacao != null) {
            if( categorias.alimentacao != null ) {
                obj["alimentacao"] = parseFloat(orcamentos.alimentacao - categorias.alimentacao.valor)
            } else {
                obj["alimentacao"] = parseFloat(orcamentos.alimentacao)
            }
            
        }

        if (orcamentos.transporte != null) {
            if( categorias.transporte != null ) {
                obj["transporte"] = parseFloat(orcamentos.transporte - categorias.transporte.valor)
            } else {
                obj["transporte"] = parseFloat(orcamentos.transporte)
            }
            
        }
             
        if (orcamentos.Lazer != null) {
            if( categorias.Lazer != null ) {
                obj["Lazer"] = parseFloat(orcamentos.Lazer - categorias.Lazer.valor)
            } else {
                obj["Lazer"] = parseFloat(orcamentos.Lazer)
            }
            
        } 

        if (orcamentos.moradia != null) {
            if( categorias.moradia != null ) {
                obj["moradia"] = parseFloat(orcamentos.moradia - categorias.moradia.valor)
            } else {
                obj["moradia"] = parseFloat(orcamentos.moradia)
            }
            
        }

       
    }

    return obj
}