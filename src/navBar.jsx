import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navBar.css'
function NavBar(){
    const cart=useSelector(state=>state.cart)
    return(
        <div className="container">
            <div className="logo">
                <Link to={'/'}>Home</Link>
            </div>
            <div className="nav">
                <Link to={'/'}>Product</Link>
                <Link to={'/cart'}>Cart-{cart.length}</Link>
            </div>
        </div>
    )
}
export default NavBar;