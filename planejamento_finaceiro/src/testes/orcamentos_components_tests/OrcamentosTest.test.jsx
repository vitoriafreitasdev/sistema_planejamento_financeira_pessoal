

import {act, render, renderHook, screen} from "@testing-library/react"
import {describe, expect, it} from "vitest"
import { wrapper } from "../mocked_data_for_test/data"

import userEvent from '@testing-library/user-event'
import Orcamentos from "../../routes/orcamentos/Orcamentos"
import useOrcamento from "../../routes/orcamentos/orcamentos_hooks/useOrcamento"

describe("Test the hook useOrcamentos and the Orcamentos component", () => {

   it("Should add properly", () => {
        const {result} = renderHook(() => useOrcamento(), {wrapper})

        act(() => {
            result.current.setCategoria("Lazer")
            result.current.setOrcamentoNum(1000)
        })

        act(() => {
            result.current.adicionarOrcamento()
        })

        const orcAtt = {"Lazer": 1000, "transporte": 1000, "moradia": 1200, "alimentação": 1000}

        expect(result.current.orcamentosSalvos).toStrictEqual(orcAtt)
        expect(result.current.mensagem).toBe("Adicionado com sucesso.")
   })

   it("Should add properly in the component", async () => {
        const user = userEvent.setup()

        render(<Orcamentos/>, {wrapper})

        await user.type(
            screen.getByTestId("selectCat"),
            "Lazer"
        )

        await user.type(
            screen.getByTestId("inputNum"),
            "1000"
        )

        const span = screen.getByTestId("span")
        expect(span).toHaveTextContent("1000")
   })

})