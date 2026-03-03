/* eslint-disable no-unused-vars */

import {describe, expect, it, vi, beforeEach, afterEach} from "vitest"
import CSV from "../../utils/CSV"

describe("Testando CSV", () => {
  let csvContentCapturado
  
  beforeEach(() => {
    // Mock do Blob que captura o conteúdo

    vi.stubGlobal('Blob', vi.fn().mockImplementation((content, options) => {
        // passa o conteudo para a variavel
        csvContentCapturado = content[0] 
        // Em vez de criar um blob de verdade, apenas:
        // console.log('Conteúdo que seria do blob:', content[0]) // "janeiro,fevereiro\n4324,6606"
        // console.log('Tipo que seria:', options.type) // "text/csv"
        
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
    
    // Mock do document (só para não dar erro)
    document.createElement = vi.fn().mockReturnValue({ click: vi.fn() })
    document.body.appendChild = vi.fn()
    document.body.removeChild = vi.fn()
  })
  
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it.only("deve lidar com números decimais e formatação", () => {
    // const data = {
    //   receita: 1500.75,
    //   despesa: 899.99,
    //   saldo: 600.76
    // }
    const data = {data: [[5400, 5400], [550, 1500]], labels: ["2025/01", "2025/02", "2025/01", "2025/02"]}
    CSV(data, "financas.csv")
    
    // Verificar o conteúdo capturado
    expect(csvContentCapturado).toBe("receita,despesa,saldo\n1500.75,899.99,600.76")
  })
})