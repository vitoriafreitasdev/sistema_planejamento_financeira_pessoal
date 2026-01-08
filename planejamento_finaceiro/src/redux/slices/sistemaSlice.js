
//sistemaSlice.js
import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = { contador: 0}
const sistemaSlice = createSlice(
    {
        name: "sistemaSlice",
        initialState: estadoInicial,
        reducers: {
            teste: (state, action) => {
                state.contador += action.payload
            }
        }
    }
)

export const {teste} = sistemaSlice.actions
export default sistemaSlice.reducer