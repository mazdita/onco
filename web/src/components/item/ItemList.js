import {  useEffect, useState } from "react";
import itemsService from '../../services/item-service';
import Item from "./Item";
import SearchBar from "../../components/item/SearchBar";
import './ItemList.css';

//import ItemForm from '../ItemForm';

function ItemList({onItemButtonClick}) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
      itemsService
          .list(search)
          .then((data) => {
            console.log('data', data)
              setItems(data);
          })
          .catch((error) => console.error(error))
  },[search]);

  function handleSearch(text) {
      setSearch(text);
}

console.log('items.length', items.length)
  return (
      <div>
          <div className="my-4">
          <SearchBar
          value={search}
          onSearch={handleSearch}
            /> 
          </div>
      
      <div className="row">
      
          {items.length !== 0 &&
              items.map((item) => (
                  <Item {...item} key={item.id} />
              ))}
      
      </div>
      
  </div>
  )
}
export default ItemList;