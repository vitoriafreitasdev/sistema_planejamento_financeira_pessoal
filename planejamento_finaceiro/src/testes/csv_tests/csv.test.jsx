
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import {describe, expect, it, vi, beforeEach} from "vitest"

import ButtonCSV from "../../componentes/ButtonCSV"

// Mock do módulo CSV antes dos testes
vi.mock("../../utils/CSV", () => ({
  default: vi.fn()
}))

// Importar o CSV depois do mock para pegar a versão mockada
import CSV from "../../utils/CSV"

describe("Testing CSV", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("Test integration: button click triggers CSV download", async () => {
    const data = { janeiro: 4324, fevereiro: 6606, marco: 5422 }
    const filename = "test-data.csv"
    const user = userEvent.setup()
    
    render(
      <ButtonCSV data={data} filename={filename} />
    )

    const btnCsv = screen.getByTestId("btn-csv")
    
    // Clicar no botão
    await user.click(btnCsv)
    
    // Verificar se a função CSV mockada foi chamada
    expect(CSV).toHaveBeenCalledTimes(1)
    expect(CSV).toHaveBeenCalledWith(data, filename)
  })


})