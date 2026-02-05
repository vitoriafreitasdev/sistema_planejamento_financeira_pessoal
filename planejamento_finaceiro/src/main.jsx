
// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Home from './componentes/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from './redux/store.js'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import Transacoes from './routes/transacoes/Transacoes.jsx'
import Historico from './routes/historico/Historico.jsx'
import Orcamentos from './routes/orcamentos/Orcamentos.jsx'
import Metas from './routes/metas/Metas.jsx'

const router = createBrowserRouter(
  [
   {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
      ,
      {
        path: "/transacoes",
        element: <Transacoes/>
      },
      {
        path: "/historico",
        element: <Historico/>
      },
      {
        path: "/orcamentos",
        element: <Orcamentos/>
      }
      ,
      {
        path: "/metas",
        element: <Metas/>
      }
    ]
   }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)