import { useContext } from "react";
import ordersService from "../../services/order-service";
import { CartContext } from "../../contexts/CartContext";
import

function Order() {
    const {createOrder } =useContext(CartContext);
    const handleCreateOrder = () => {
        createOrder({
            buyer,
            items

        })
    }
    return(
        
        <div className="Checkout container">
        <div className="order mb-4">
          <h2> Gracias por tu pedido!</h2>
          {cart.items.map((item) => (
            <div className="item mt-4 mb-2">
              <div className="row ">
                <div className="col ">
                  <img id="item-img" src={item.image} alt={item.title} />
                </div>
                <div className="col">
                  <span className="name align-middle">{item.title}</span>
                </div>
                <div className="col">
                  <span className="align-middle" >Units: {item.quantity} </span>
                </div>
                <div className="col">
                  <span className="item-price">{item.price}€</span>
                </div>
              </div>
            </div>
          ))}
          <div className="price align-items-end mt-4 ">
            <span className="total lighter-tex me-2">Total: </span>
            <span className="price main-color-text"> {cart.finalPrice.toFixed(2)}€</span>
          </div>
        </div>
        </div>
    )
}

export default Order
