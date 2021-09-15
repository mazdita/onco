import {  useEffect, useState } from "react";
import itemsService from '../../services/item-service';
import Item from "./Item";
import SearchBar from "../../components/item/SearchBar";
//import ItemForm from '../ItemForm';

function ItemList() {
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
      <SearchBar
          value={search}
          onChange={(text) => handleSearch(text)}
      />
      <ul className="container">
          {items.length !== 0 &&
              items.map((item) => (
                  <Item {...item} key={item.id} />
              ))}
      </ul>
  </div>
  )
}
export default ItemList;