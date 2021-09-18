
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/users/login/Login";
import Register from "./components/users/register/Register";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
//import Navbar from './components/misc/navbar/Navbar';
import ItemList from '../src/components/item/ItemList';
//import PrivateRoute from './components/guards/PrivateRoute';
import GoogleCallback from './components/users/GoogleCallback';

import Navbar from './components/misc/navbar/Navbar';

import Order from './components/cart/Cart';
import Profile from './components/users/profile/Profile';

function App() {
  /*const [cart, setCart] = useState([]) // [{'producto1', cantidad1}]

  const cartItemsQuantity = cart.reduce((accQuantity, currentItem) => accQuantity + currentItem.quantity, 0)

  const updateCart = (id) => {
    setCart(prevCart => [...prevCart, {id, quantity: 1}])
  }*/
  /*<Route exact path="/cart" component={() => <Cart onItemButtonClick={updateCart}/>} />
  <PrivateRoute exact path="/" component={() => <ItemList onItemButtonClick={updateCart} />} />
  <Navbar cartQuantity={cartItemsQuantity}/>
  <Route exact path="/order" component={Cart} />*/
  const location = useLocation()
  console.log(location.pathname === '/login')
  return (
    <>
    {location.pathname !== '/login' && <Navbar/>}
    <div className="container">
        
        <Switch>
          <Route exact path="/order" component={Order} />
          {/*<Route exact path="/items/:id" component={ItemDetail} />*/}
          <Route exact path="/" component={ItemList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/google/cb" component={GoogleCallback} />
          <Route exact path="/profile" component={Profile}/>
          <Redirect to="/"/>
        </Switch>
    
    </div>
    </>
  );
}

export default App;
