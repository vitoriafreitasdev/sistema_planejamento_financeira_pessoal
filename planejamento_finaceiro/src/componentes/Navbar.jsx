import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link className="nav-links" to={"/"}><h3>Inicio</h3></Link>
        <Link className="nav-links" to={"/dashboard"}><h3>Dashboard</h3></Link>
        <Link className="nav-links" to={"/"}><h3>Transações</h3></Link>
        <Link className="nav-links" to={"/"}><h3>Histórico</h3></Link>
        <Link className="nav-links" to={"/"}><h3>Orçamentos</h3></Link>
        <Link className="nav-links" to={"/"}><h3>Metas</h3></Link>
    </div>
  )
}

export default Navbar