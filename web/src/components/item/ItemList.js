import { useEffect, useState } from "react";
import itemsService from '../../services/item-service';
import OncoItem from "../../components/item/Onco-item";
import SearchBar from "../../components/item/SearchBar";

function PlantList() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [check, setCheck] = useState(false);

    useEffect(() => {
        itemsService.list()
            .then(items => setItems({ items })
            )
            .catch(error => {
                setIsLoading(false)
                console.error(error)
            })
    }, [])

    function handleChange() {
        setCheck(!check)
    }

    function handleSearch(text) {
        setSearch(text)
    }

    const itemFiltered = items
        .filter(item => {
            return item.title.toLowerCase().includes(setSearch(search).toLowerCase())
        })
        .filter(item =>{
            return item
        })

    return(
        
        <div className="container">
            <div>
                <h1>Find your Item</h1>
            </div>
            <div>
                <SearchBar value={search} onSearch={handleSearch} />
            </div>
            <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input onChange={handleChange} value={check} checked autocomplete={check ? "on" : "off"}/> Pet friendly
                </label>
            </div>
            <h3>Featured items</h3>
            {isLoading ? (<i className="fa fa-gear fa-spin"></i>) : (
                <div className="row">
                    <div className="col-6">
                        {itemFiltered.map(item =>
                            <OncoItem key={item.id} {...item} />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlantList;