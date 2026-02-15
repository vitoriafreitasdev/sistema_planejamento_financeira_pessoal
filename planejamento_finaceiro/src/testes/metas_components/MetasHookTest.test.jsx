
// testar o hook useMetas

//Testing
import {render, renderHook, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import {describe, expect, it} from "vitest"

//Functions
import useMetas from "../../routes/metas/metas_hooks/useMetas.jsx"

//Components
import MetasContainer from "../../routes/metas/MetasContainer.jsx"

//Dados mockados
import { wrapper } from "../mocked_data_for_test/data.jsx"

describe("Testing the hook useMetas", () => {

    it("Should be able to add metas properly", async () => {
        const user = userEvent.setup()

        const {result} = renderHook(() => useMetas(), {wrapper})
        
        render(
            <MetasContainer setData={result.current.setData} setMeta={result.current.setMeta} setValor={result.current.setValor} adicionarMeta={result.current.handleAdd}/>
        )

        const btn_addmetas = screen.getByTestId("btn-addmetas")
        const input_setmeta = screen.getByTestId("input-setmeta")
        const input_setvalor = screen.getByTestId("input-setvalor")
        const input_setdata = screen.getByTestId("input-setdata")

        await user.type(input_setmeta, "Viagem")
        await user.type(input_setvalor, "15000")
        await user.type(input_setdata, "2026-12-12")

        await user.click(btn_addmetas)

        const metas = {
            "Carro": {valor: "80000", progresso: 0, data: "2028-02-09", restante: 723, porcentagem: 0},
            "Viagem": {valor: "15000", progresso: 0, data: "2026-12-12", restante: 299, porcentagem: 0}
        }

        expect(result.current.metas).toStrictEqual(metas)
            
    })
})

// o erro aqui esta acontecendo porque o valor de metas não esta sendo atualizado, ele paga o valor que do preloadState dos dados mockados, ver um jeito de conseguir fazer os dados atualizar