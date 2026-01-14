
import { createSlice } from "@reduxjs/toolkit";

const localSave = localStorage.getItem("historico")

const estadoInicial = { 
    historico: localSave ? JSON.parse(localSave) : {}
}
const sistemaSlice = createSlice(
    {
        name: "sistemaSlice",
        initialState: estadoInicial,
        reducers: {
            passarTransacao: (state, action) => {


                const transacao = action.payload

                const data =  transacao.data
               

                if (!state.historico[data]){
                    state.historico[data] = []
                }
                
                state.historico[data].push(transacao);
                
                const objeto = JSON.stringify(state.historico)
                localStorage.setItem("historico", objeto)
            }
        }
    }
)

export const {passarTransacao} = sistemaSlice.actions
export default sistemaSlice.reducer