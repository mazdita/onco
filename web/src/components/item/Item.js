import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import './Item.css';

function Item({id, title, image, onButtonClick, price, ...item}) {
  const { createItem  } = useContext(CartContext);

  const handleCreateItem = () => {
    console.log('create item')
    createItem({
      title,
      price,
      image,
      id,
      quantity: 1,
    });
  };

    return (
      <div className="col-4 mb-2 ">
      <div className="card small-shadow">
        <Link to={`/items/${id}`}  ><img className="card-img-top img-fluid"  src={image} alt={title}/></Link>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <div className="d-flex justify-content-around">
            <p className="card-text p-2">{price}€</p>
            <button onClick={handleCreateItem} className="btn btn-light">
            <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

      /*<div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
          <div className="card">
            <Link to={`/items/${id}`} {...item} >
              <img className="card-img-top" src={image} alt={title} />
            </Link>
            <div className="card-body ">
              <h5 className="card-title  text-center">{title}</h5>
              <p className="card-text text-center">{price}</p>
              <button onClick={handleCreateItem} className="btn btn-outline-info">
                <i className="fa fa-shopping-cart"></i>
                </button>
            </div>
          </div>
        </div>
      </div>*/
    );
  }
  
  export default Item;