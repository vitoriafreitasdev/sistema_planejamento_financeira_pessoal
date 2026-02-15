
// aqui testar a renderização dos componentes historico

// Testing
import { render, renderHook, screen} from "@testing-library/react"
import { describe, expect, it} from "vitest"
import userEvent from '@testing-library/user-event'

// Redux
import {Provider} from "react-redux"
import {store} from '../../redux/store.js'

// Dados Mockados
import {wrapper} from "../mocked_data_for_test/data.jsx"
// Components
import Historico from "../../routes/historico/Historico.jsx"
import HistoricoContainer from "../../routes/historico/HistoricoContainer.jsx"
import Dados from "../../routes/historico/Dados.jsx"
import useHistorico from "../../routes/historico/historico_hooks/useHistorico.jsx"

const {result} = renderHook(() => useHistorico(), {wrapper})

describe.skip("Test the historico components", () => {


    it("Should test if the component HistoricoContainer is rendering Historico Container. ", () => {

        render(
            <Provider store={store}>
                <Historico/>
            </Provider>
        )

        const HistCont = screen.getByTestId("HistoricoContainer")

        expect(HistCont).toBeInTheDocument()
    })

    it("Should test if HistoricoContainer is rendering the data properly", async () => {
        
        render(
            <HistoricoContainer total={result.current.total} excluir={result.current.excluir} dados={result.current.dados}/>
        )

        const p = screen.getByTestId("histcont-p")
        const dadosComponent = screen.getAllByTestId("Dados")

        expect(p).toHaveTextContent("2 transações registradas")
        expect(dadosComponent).toHaveLength(2)

        

    })

    it("Should test if Dados is rendering all of the element inside of him correctly", () => {

        const data = {categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}

        render(
            <Dados dd={data} excluir={result.current.excluir}/>
        )

        // divs
        const items = screen.getByTestId("items")
        const div1 = screen.getByTestId("itemsdiv-1")
        const div2= screen.getByTestId("itemsdiv-2")
        const spandiv = screen.getByTestId("span-div")

        // elements
        const p = screen.getAllByRole("paragraph")
        const image = screen.getAllByRole("img")
        const span = screen.getAllByRole("span")

        expect(items).toBeInTheDocument()
        expect(div1).toBeInTheDocument()
        expect(div2).toBeInTheDocument()
        expect(spandiv).toBeInTheDocument()

        // Para verificar se cada item individualmente está renderizando
        p.forEach(item => {
            expect(item).toBeInTheDocument()
        })
        
        image.forEach(item => {
            expect(item).toBeInTheDocument()
        })
        
        span.forEach(item => {
            expect(item).toBeInTheDocument()
        })
        
    })

    it("Should test if the content of the Data component elements is correct.", () => {
        const data = {categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}

        render(
            <Dados dd={data} excluir={result.current.excluir}/>
        )

        const span_desc = screen.getByTestId("span-desc")
        const span_cat = screen.getByTestId("span-cat")
        const p_data = screen.getByTestId("p-data")
        const p_valor = screen.getByTestId("p-valor")

        expect(span_desc).toHaveTextContent("sal")
        expect(span_cat).toHaveTextContent("salario")
        expect(p_data).toHaveTextContent("2025-01-01")
        expect(p_valor).toHaveTextContent("5000")

    })

    it("Should test if when user click to delete data, data is being deleted correctly", async () => {
        const user = userEvent.setup()

        const data = {categoria: "transporte", receita_desp: "despesa", valor: "500", descricao: "gal", data: "2025-01-02"}

        const {result} = renderHook(() => useHistorico(), {wrapper})

        render(
            <Dados dd={data} excluir={result.current.excluir}/>
        )

        const btnExcluir = screen.getByTestId("excluir-btn")

        await user.click(btnExcluir)

        const newDadosVersion = [[{categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}]]
        
        expect(result.current.total).toBe(1)
        expect(result.current.dados).toStrictEqual(newDadosVersion)
    })
})
