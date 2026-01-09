import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard-main-container'>
        <div className='container-info'>
            <div>
                <h4>Saldo Atual</h4>
                <p className="p-num saldo">R$ 6700</p>
                <p className="p-info saldo-info">Saldo positivo</p>
            </div>
            <div>
                <h4>Receita</h4>
                <p className="p-num receita">R$ 13000</p>
                <p className="p-info">Total de entrada</p>

            </div>
            <div>
                <h4>Despesas</h4>
                <p className="p-num despesa">R$ 6300</p>
                <p className="p-info">Total de saida</p>
            </div>
            <div>
                <h4>Metas de Economia</h4>
                <p className="p-num economia">30%</p>
                <p className="p-info">R$ 4500 de R$ 15000</p>
            </div>
        </div>

        <div className="container-graficos">
            <div className="tendencia-mensal">
                <p>Tendencia Mensal</p>
                <p>Receitas vs Despesas nos último 6 meses</p>
                <div className="grafico-div">
                    {/* fazer a plotagem do grafico aqui usar dados de exemplo, vao ser substuidos por dados dinamicos */}
                </div>
            </div>

            <div className="despesa-categoria">
                <p>Despesas por Categoria</p>
                <p>Distribuição dos gastos</p>
                <div className="grafico-div">
                    {/* fazer a plotagem do grafico aqui usar dados de exemplo, vao ser substuidos por dados dinamicos */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard