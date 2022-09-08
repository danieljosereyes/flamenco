import "./CartWidget.scss"
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <nav className="nav">
            <Link to={'/pasillo/EXO'}>EXO</Link>
            <Link to={'/pasillo/HP'}>HP</Link>
            <Link to={'/pasillo/Dell'}>DELL</Link>
        </nav>
    )
}
export default CartWidget