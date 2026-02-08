
import "@testing-library/jest-dom"

import {Provider} from "react-redux"
import {store} from '../redux/store.js'
import Dashboard from "../routes/dashboard/Dashboard";
import BoxData from "../routes/dashboard/BoxData.jsx"
import GrafficBox from "../routes/dashboard/GrafficBox.jsx"
import ContainerGraffic from "../routes/dashboard/ContainerGraffic.jsx"

import {render, screen} from "@testing-library/react"
import {describe, expect, it} from "vitest"

describe("Test the functions within the Dashboard component", () => {
    it("Should Component BoxData and GrafficBox", async () => {
    render(
        <Provider store={store}><Dashboard/></Provider>
    )
    
    const BoxDataComp = await screen.findAllByTestId('BoxData')
    const GrafficBoxComp = await screen.findAllByTestId('GrafficBox')
    const ContainerGrafficComp = await screen.findByTestId('ContainerGraffic')
    
    expect(BoxDataComp).toHaveLength(4) // São 4 BoxData no Dashboard
    expect(GrafficBoxComp).toHaveLength(2) // São 2 GrafficBox
    expect(ContainerGrafficComp).toBeInTheDocument()
})
})