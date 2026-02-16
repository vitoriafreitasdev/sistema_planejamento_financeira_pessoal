
//store.
import {configureStore} from "@reduxjs/toolkit"
import sistemaSlice from "./slices/sistemaSlice.js"
export const store = configureStore({
    reducer: {
        sistema: sistemaSlice
    }
})

