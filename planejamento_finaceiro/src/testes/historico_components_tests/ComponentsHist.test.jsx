/* eslint-disable no-unused-vars */
// aqui testar a renderização dos componentes historico
// Testing

import { render, screen} from "@testing-library/react"
import {beforeEach, describe, expect, it} from "vitest"

// Redux
import {Provider} from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import sistemaSlice from "../../redux/slices/sistemaSlice.js"
import {store} from '../../redux/store.js'

// Dados Mockados
import {preloadedState} from "../mocked_data_for_test/data.js"
// Components
import Historico from "../../routes/historico/Historico.jsx"
import HistoricoContainer from "../../routes/historico/HistoricoContainer.jsx"
import Dados from "../../routes/historico/Dados.jsx"


describe("Test the historico components", () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Historico/>
            </Provider>
        )
    })

    it("Should be rendering the component HistoricoContainer inside of Historico Container. ", () => {

        const HistCont = screen.getByTestId("HistoricoContainer")

        expect(HistCont).toBeInTheDocument()
    })
})