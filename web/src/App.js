
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/users/login/Login";
import Register from "./components/users/register/Register";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
//import Navbar from './components/misc/navbar/Navbar';
import ItemList from '../src/components/item/ItemList'


function App() {
  const location = useLocation()
  console.log(location.pathname === '/login')
  return (
    <div className="container">
      
        <Switch>
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={ItemList} />
          <Redirect to="/"/>
        </Switch>
    
    </div>
  );
}

export default App;
