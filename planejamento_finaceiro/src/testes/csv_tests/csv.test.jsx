

import {describe, expect, it, vi, beforeEach, afterEach} from "vitest"
import {renderHook} from "@testing-library/react"

import CSV from "../../utils/CSV.jsx"
import dadosParaCsvBtn from "../../utils/dadosParaCsvBtn.jsx"


describe("Testando CSV", () => {
  let csvContentCapturado

  beforeEach(() => {
    // Mock do Blob que captura o conteúdo

    vi.stubGlobal('Blob', vi.fn().mockImplementation((content, options) => {
        // passa o conteudo para a variavel
        csvContentCapturado = content[0] 
        // Em vez de criar um blob de verdade, apenas:
        // Retorna um objeto simples (não é um blob de verdade)
        return { 
            content, 
            options,
            tamanhoFalso: 123 
        }
    }))
    
    // Mock do URL (só para não dar erro)
    vi.stubGlobal('URL', {
      createObjectURL: vi.fn(),
      revokeObjectURL: vi.fn()
    })
    
    
  })
  
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it.only("deve lidar com números decimais e formatação", () => {
    const labels = ["2025/01", "2025/02"]

    const receita = {
        "2025/01": 5000,
        "2025/02": 2300
    }

    const despesa = {
        "2025/01": 1300,
        "2025/02": 300
    }
    
    const {result} = renderHook(() => dadosParaCsvBtn(labels, receita, despesa))

    CSV(result.current, "financas.csv")
    
    // Verificar o conteúdo capturado
    expect(csvContentCapturado).toBe("data,receita,despesa\n2025/01,5000,1300\n2025/02,2300,300")
  })
})