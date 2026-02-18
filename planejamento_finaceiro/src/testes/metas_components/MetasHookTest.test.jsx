
// testar o hook useMetas
//Testing
import {act, render, renderHook, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import {describe, expect, it} from "vitest"

//Functions
import useMetas from "../../routes/metas/metas_hooks/useMetas.jsx"

//Components
import Metas from "../../routes/metas/Metas.jsx"

//Dados mockados
import { wrapper } from "../mocked_data_for_test/data.jsx"

describe.skip("Testing the hook useMetas", () => {

    it("Should be able to add metas properly", async () => {
        const { result } = renderHook(() => useMetas(), { wrapper })

        act(() => {
            result.current.setMeta("Viagem")
            result.current.setValor("15000")
            result.current.setData("2026-12-12")
        })

        act(() => {
            result.current.adicionarMeta()
        })

        const dataAtual = new Date()
        const data = new Date("2026-12-12")
        const diffMs = data.getTime() - dataAtual.getTime()
        const diasRest = Math.floor(diffMs / (1000 * 60 * 60 * 24))

        expect(result.current.metas).toStrictEqual({
            Carro: {
            valor: "80000",
            progresso: 0,
            data: "2028-02-09",
            restante: 723,
            porcentagem: 0
            },
            Viagem: {
            valor: "15000",
            progresso: 0,
            data: "2026-12-12",
            restante: diasRest,
            porcentagem: 0
            }
        })
    })

    it("should allow user to add a new meta", async () => {
            const user = userEvent.setup()

            render(<Metas />, { wrapper })

            await user.type(
                screen.getByTestId("input-setmeta"),
                "Viagem"
            )

            await user.type(
                screen.getByTestId("input-setvalor"),
                "15000"
            )

            await user.type(
                screen.getByTestId("input-setdata"),
                "2026-12-12"
            )

            await user.click(
                screen.getByTestId("btn-addmetas")
            )

            expect(
                screen.getByText("Viagem")
            ).toBeInTheDocument()
    })

    it("Should be able to add progress", () => {
        const { result } = renderHook(() => useMetas(), { wrapper })

        const addFunction = result.current.handleAdd

        act(() => {
            addFunction("Carro", 1000)
        })

        expect(result.current.metas).toStrictEqual({
            Carro: {
                valor: "80000",
                progresso: 1000,
                data: "2028-02-09",
                restante: 723,
                porcentagem: 1
            }
        })
    })

    it("Should be able to show error message", async () => {
    
        const { result } = renderHook(() => useMetas(), { wrapper })

        const addFunction = result.current.handleAdd

        act(() => {
            addFunction("Carro", 5000)
        })

        expect(result.current.mensagem).toEqual("Saldo insuficiente para adicionar o progresso")
    })
})

