
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/users/login/Login";
import Register from "./components/users/register/Register";
//import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
//import Navbar from './components/misc/navbar/Navbar';
import ItemList from '../src/components/item/ItemList';
import PrivateRoute from './components/guards/PrivateRoute';
import GoogleCallback from './components/users/GoogleCallback';
import ItemDetail from './components/item/ItemDetail';
import Navbar from './components/misc/navbar/Navbar';


function App() {
  
  return (
    <>
    <div className="container">
        
        <Switch>
          <PrivateRoute exact path="/" component={ItemList} />
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/google/cb" component={GoogleCallback} />
          <Redirect to="/"/>
        </Switch>
    
    </div>
    </>
  );
}

export default App;
