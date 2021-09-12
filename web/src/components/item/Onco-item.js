function OncoItem({title, image, price}) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <a href="#" className="btn btn-primary">
              <i className="fa fa-shopping-cart fa-2x"></i>
          </a>
        </div>
      </div>
    );
  }
  //imagen y título lleva a detalle item
  //cart suma +1 al carrito navbar
  export default OncoItem;