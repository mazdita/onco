import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../../contexts/AuthContext";
import service from '../../../services/user-service';
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar({cartQuantity = 0}) {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { cart, editItem, deleteItem, getCurrentQuantity } = useContext(CartContext);

    const [showUser, setShowUser] = useState(false);

    function handleLogout() {
        service.logout()
        .then(() => {
            auth.logout()
            history.push('/login')
        })
    }

    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowUser(!showUser)}
        >
          <i className="fa fa-user fa-2x"></i>
        </button>
        <div className="inline my-2 my-lg-0">
        <h1 className="navbar-brand" href="#">
        
          <Link to="/"><img src='/img/onconova.png' className="navbar-picture" alt="brand-picture"/> </Link>
        
        </h1>
        </div>
        
        <div className="inline my-2 my-lg-0">
          <Link to="/order">
          <button
            
            className="btn"
            id="cart"
          >
            <i className="fa fa-shopping-cart fa-2x"></i>
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cart.items.length}
            </span>
          </button>
          </Link>

          
        </div>

        {auth.user ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {auth.user?.name && (
                <li className="nav-item">
                  <span className="nav-link me-3">Hi {auth.user?.name}!</span>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link active" href="/profile">
                  Mi perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/orders">
                  Mis pedidos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} href="">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" />
        )}
      </div>
    </nav>
    )
}

export default Navbar;