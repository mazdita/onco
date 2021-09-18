import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../cart/cart.css";

function Cart (){
  const { cart, editItem,deleteItem } = useContext(CartContext);
return(
<div className="container">
            <div className="shopping-cart">
              
                <div className="shopping-cart-items">
                  {cart.items.map((item) => (
                    
                      <div className="clearfix" key={item.id}>
                        <img
                          id="item-img"
                          src={item.image}
                          alt={item.title}
                        />
                        <span className="item-name me-2 d-flex justify-content-start">
                          {item.title}
                        </span>
                        <div className="d-flex justify-content-around">
                          <span className="item-quantity me-2">
                            Units: {item.quantity}
                            <div className="counter">
                              <div
                                className="btn-units"
                                onClick={() => editItem(item.id, 'subtract')}
                              >
                                -
                              </div>
                              <span
                          
                              >{item.quantity} </span>
                              <div
                                className="btn-units"
                                onClick={() => editItem(item.id, 'add')}
                              >
                                +
                              </div>
                            </div>
                          </span>
                          <span className="item-price">{item.price}€</span>
                          <button className="btn btn-light rounded-circle" onClick={() => deleteItem(item.id)}>
                          <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    
                  ))}
                  <div className="shopping-cart-bottom">
                    <div className="shopping-cart-total d-flex justify-content-around">
                      <div className="mt-2">
                        <span className="lighter-text">Total: </span>
                        <span className="main-color-text">
                          {cart.finalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Link to="/orders">
                      <a href="#" className="btn btn-secondary">
                        Buy
                      </a>
                      </Link>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
          )




/*function Cart() {
  const { cart, editItem } = useContext(CartContext);
    
  return (
    <div className="inline my-2 my-lg-0">
      {/*<button className="btn" id="cart">
        <i className="fa fa-shopping-bag fa-2x"></i>
        <span className="badge bg-dark text-white ms-1 rounded-pill">
          {cart.items.length}
        </span>
  </button>
      {cart.items.map((item) => (
        <div className="box" id={item.id} key={item.id}>
          <article className="media">
            <div className="media-left">
              <div className="itemImage image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{item.title}</strong> <br />
                  <small>{item.price}€</small>
                  <span className="item-quantity me-2">
                    Units: {item.quantity}
                  </span>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
      </div>
                <div className="control">
                  <button className="button is-info" onClick={() => {editItem(item.id, 'add')}}>+</button>
                  <button className="button is-info" onClick={() => {editItem(item.id, 'subtract')}}>-</button>
                </div>
              </div>
            </div>
          </article>
          <span className="lighter-text">Total: </span>
          <span className="main-color-text">{cart.finalPrice.toFixed(2)}</span>
        </div>
      ))}
      <NavLink exact to="/" className="btn btn-info">
        Abandonar carrito
      </NavLink>

    </div>
  );
}

export default Cart;*/
}
export default Cart