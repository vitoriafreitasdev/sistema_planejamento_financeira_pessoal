/* eslint-disable no-unused-vars */
// fazer aqui testes para o Hook useHistorico.


import "@testing-library/jest-dom"

//Testing
import {Provider} from "react-redux"
import {renderHook, render, fireEvent, screen} from "@testing-library/react"
import {describe, expect, it, vi} from "vitest"

//Redux
import { configureStore } from '@reduxjs/toolkit'
import sistemaSlice from "../../redux/slices/sistemaSlice.js"

//Functions
import useHistorico from "../../routes/historico/historico_hooks/useHistorico.jsx"


//Dados mockados
import { preloadedState } from "../mocked_data_for_test/data.js"

describe("Test the hook useHistorico", () => {

    it("Should see if total that useHistorico returned is correct", () => {

        const mockedStore = configureStore(
            {
                reducer: {sistema: sistemaSlice},
                preloadedState
            }
        )

        const wrapper = ({children}) => ( 
            <Provider store={mockedStore}> 
                {children}
            </Provider>
        )

        const {result} = renderHook(() => useHistorico(), {wrapper})

        expect(result.current.total).toBe(2)

    })

    it("Should see if the function 'excluir' is working the way it should be", () => {

        const mockedStore = configureStore(
            {
                reducer: {sistema: sistemaSlice},
                preloadedState
            }
        )

        const wrapper = ({children}) => ( 
            <Provider store={mockedStore}> 
                {children}
            </Provider>
        )

        const {result} = renderHook(() => useHistorico(), {wrapper})

        const excluirFunction = vi.fn(result.current.excluir);

        render(
            <button data-testid="btn-excluir" onClick={() => excluirFunction("gal", "transporte", "2025-01-02")}>
                Excluir item
            </button>
        )

        const btn = screen.getByTestId("btn-excluir")
        fireEvent.click(btn)

        const newDadosVersion = [[{categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}]]

        expect(excluirFunction).toHaveBeenCalledTimes(1);
        expect(excluirFunction).toHaveBeenCalledWith("gal", "transporte", "2025-01-02");
        expect(result.current.total).toBe(1)
        expect(result.current.dados).toStrictEqual(newDadosVersion)

    })
})