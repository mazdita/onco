import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import itemsService from "../../services/item-service";

function ItemDetails() {

    const [item, setItem] = useState(null);
    const id = useParams();
    const history = useHistory();
    
    useEffect(() => {
        itemsService.detail(id)
            .then(item => setItem(item))
            .catch(error => {
                console.error(error);
                if (error.response?.status === 404) {
                    history.push('/404');
                }
            })
    }, [id])

    return item && (
        <div className="container">
            <div style={{backgroundImage: `url(${item.image})`}}></div>
            <div className="card-body text-centered">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}€</p>
                <button>Add to Cart</button>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.light}</li>
                <li className="list-group-item">{item.water}</li>
            </ul>
        </div>
    )
}

export default ItemDetails;