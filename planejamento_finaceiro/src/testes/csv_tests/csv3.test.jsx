
/* eslint-disable no-unused-vars */
import {describe, expect, it, vi, beforeEach, afterEach} from "vitest"
import {renderHook,} from "@testing-library/react"
import CSV from "../../utils/CSV"
// arrumar os testes do csv
import dadosParaCsvBtn from "../../utils/dadosParaCsvBtn.jsx"

const labels = ["2025/01", "2025/02"]

const receita = {
    "2025/01": 5400,
    "2025/02": 5400
}

const despesa = {
    "2025/01": 550,
    "2025/02": 1500
}

describe("test", () => {
    it("test CSV", () => {
        const {result} = renderHook(() => dadosParaCsvBtn(labels, receita, despesa))
    })

})