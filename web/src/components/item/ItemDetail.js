import { useEffect } from "react";
import {  useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import itemsService from "../../services/item-service";
import { useContext } from "react";
import { CartContext } from "../../../src/contexts/CartContext";


   

    function ItemDetails({  title, image, price,description}) {
        const { createItem } = useContext(CartContext);
        const [item, setItem] = useState(null);

        useEffect(() => {
            let isMounted = true;
            itemsService.detail(id)
                .then(item => {
                    if (isMounted) {
                        setItem(item)
                    }
                })
            return () => isMounted = false;
        }, [id])
        
      
    return item && (

        <div className="col-sm">
            <div  className="item-image" ></div>
            <div className="card-body text-centered ">
                <img>{item.image}</img>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}€</p>
                <p className="card-text">{item.description}</p>
                
                <button >Buy</button>
            </div>
            
        </div>
    )
}

export default ItemDetails;