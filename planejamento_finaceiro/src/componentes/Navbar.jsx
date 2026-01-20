import { useState } from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  const [on, setOn] = useState(false)
  return (
    <div>
      <div className="menu-btn-container">
        <button onClick={() => setOn(!on)}>MENU</button>
      </div>
      <div className={on ? "navbar on" : "navbar"}>
          <Link className="nav-links" to={"/"}><h3>Inicio</h3></Link>
          <Link className="nav-links" to={"/dashboard"}><h3>Dashboard</h3></Link>
          <Link className="nav-links" to={"/transacoes"}><h3>Transações</h3></Link>
          <Link className="nav-links" to={"/historico"}><h3>Histórico</h3></Link>
          <Link className="nav-links" to={"/orcamentos"}><h3>Orçamentos</h3></Link>
          <Link className="nav-links" to={"/"}><h3>Metas</h3></Link>
      </div>
    </div>
  )
}

export default Navbar