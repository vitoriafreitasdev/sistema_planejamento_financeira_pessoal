
// Testing

import {Provider} from "react-redux"
import { render, screen} from "@testing-library/react"
import {describe, expect, it} from "vitest"

// Redux
import {store} from '../../redux/store.js'

//Components
import Dashboard from "../../routes/dashboard/Dashboard.jsx";
import BoxData from "../../routes/dashboard/BoxData.jsx"
import ContainerGraffic from "../../routes/dashboard/ContainerGraffic.jsx"
import Graffic from "../../graficos/Graffic.jsx"
import DespesaCategoria from "../../graficos/DespesaCategoria.jsx"
import OrcamentRealiz from "../../graficos/OrcamentRealiz.jsx"
import GrafficBox from "../../routes/dashboard/GrafficBox.jsx"

//Dados mockados
import {resObj, grafficValores, DespCat } from "../mocked_data_for_test/data.js"



describe.skip("Testing the components rendering", () => {
    
    it("Should render the components BoxData and GrafficBox", async () => {
        render(
            <Provider store={store}>
                <Dashboard/>
            </Provider>
        )
        
        const BoxDataComp = await screen.findAllByTestId('BoxData')
        const GrafficBoxComp = await screen.findAllByTestId('GrafficBox')
        const ContainerGrafficComp = await screen.findByTestId('ContainerGraffic')
        
        expect(BoxDataComp).toHaveLength(4) // São 4 BoxData no Dashboard
        expect(GrafficBoxComp).toHaveLength(2) // São 2 GrafficBox
        expect(ContainerGrafficComp).toBeInTheDocument()
    })

    it("Should see if component BoxData is rendering the HTML elements properly", async () => {
        render(
            <BoxData title={"teste"} valueP1={"valor teste"} valueP2={"outro valor teste"} P1ClassName={"p-num"} P2ClassName={"p-info"}/>
        )

       const h4 = await screen.findByRole("heading")
       const p1 = await screen.findByTestId("p1")
       const p2 = await screen.findByTestId("p2")

       expect(h4).toHaveTextContent("teste")
       expect(p1).toHaveTextContent("valor teste")
       expect(p2).toHaveTextContent("outro valor teste")

    })

    it("Should see if component ContainerGraffic is rendering the HTML elements that needs to render", async () => {

    

        render(
            <ContainerGraffic orcamentoXrealizado={resObj}/>
        )

        const div = await screen.findAllByTestId("divelement")
        const h4 = await screen.findByRole("heading")
        const p = await screen.findByRole("paragraph")
        const OrcamentRealizCont = await screen.findByTestId("OrcamentRealiz")

        expect(div).toHaveLength(3)
        expect(h4).toBeInTheDocument()
        expect(p).toBeInTheDocument()
        expect(OrcamentRealizCont).toBeInTheDocument()
        
        
    })

    it("Should see if component GrafficBox is rendering properly the HTML elements and Graffic component", async () => {
        
        render(<GrafficBox classN={"tendencia-mensal"} title={"Tendencia Mensal"} pContent={"Receitas vs Despesas, últimas 6 registradas"} classN2={"grafico-div"} component={<Graffic key="tendencia-mensal-chart"  chartData={grafficValores} />}/>)

        const divGraffic = await screen.findByTestId("GrafficBox")
        const divElement = await screen.findByTestId("div-element")
        const component = await screen.findByTestId("Graffic")
        const h4 = await screen.findByRole("heading")
        const p = await screen.findByRole("paragraph")

        expect(divGraffic).toBeInTheDocument()
        expect(divElement).toBeInTheDocument()
        expect(component).toBeInTheDocument()
        expect(h4).toHaveTextContent("Tendencia Mensal")
        expect(p).toHaveTextContent("Receitas vs Despesas, últimas 6 registradas")

    })

    it("Should see if component GrafficBox is rendering properly DespesaCategoria component", async () => {
        
        render(<GrafficBox classN={"despesa-categoria"} title={"Despesas por Categoria"} pContent={"Distribuição dos gastos"} classN2={"grafico-div"} component={<DespesaCategoria key="despesas-por-categoria" despesa={DespCat}/>}/>)

        const divGraffic = await screen.findByTestId("GrafficBox")
        const divElement = await screen.findByTestId("div-element")
        const component = await screen.findByTestId("DespesaCategoria")
        const h4 = await screen.findByRole("heading")
        const p = await screen.findByRole("paragraph")

        expect(divGraffic).toBeInTheDocument()
        expect(divElement).toBeInTheDocument()
        expect(component).toBeInTheDocument()
        expect(h4).toHaveTextContent("Despesas por Categoria")
        expect(p).toHaveTextContent("Distribuição dos gastos")
    })

    /* 
    Testar => DespesaCategoria, Graffic, OrcamentRealiz 
    */

    it("Should see if DespesaCategoria component is redenring the elements properly", async () => {

        render(<DespesaCategoria despesa={DespCat}/>)

        //Pie-element-chart
        const pieComponent = await screen.findAllByTestId("Pie-element-chart")

        expect(pieComponent).toBeDefined()
    })

    it("Should see if Graffic component is redenring the elements properly", async () => {

        render(<Graffic chartData={grafficValores}/>)

        const barComponent = await screen.findAllByTestId("bar-graffic-chart")

        expect(barComponent).toBeDefined()
    })

    it("Should see if OrcamentRealiz component is redenring the elements properly", async () => {

        render(<OrcamentRealiz chartData={resObj}/>)

        //Pie-element-chart
        const pieComponent = await screen.findAllByTestId("bar-OrcamentRealiz")

        expect(pieComponent).toBeDefined()
    })

})

