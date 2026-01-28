/* eslint-disable no-unused-vars */
export default function useMetas(metas, progresso){
    const dataAtual = new Date()
    const objeto = {}
    console.log(metas)
    if(metas){
        for(let meta in metas){
            const data = new Date(metas[meta].data)
            const diffMs = data.getTime() - dataAtual.getTime()
            const diasRest = Math.floor(diffMs / 1000 * 60 * 60 * 24)

            //fazer o calc de porcentagem
            objeto[meta] = {valor: metas[meta].valor, progresso: progresso, restante: diasRest, porcentagem: 0}
        }
    }


    

    
}