import { useContext } from "react";
import {AuthContext} from "../../../contexts/AuthContext";
import service from "../../../services/user-service";

function Profile () {
    const auth = useContext(AuthContext);
    const  user  = AuthContext;

    return (
        <div className="container">
            
                <div className="col-6">
                    <div><img src={auth.user?.picture} className="profile-picture" alt="profile-picture"/></div>
                    <div>
                        <h1>{auth.user?.name}</h1>
                        <h2> {auth.user?.surname}</h2>
                        <h5>Email {auth.user?.email}</h5>
                        <h5>Direction:"{auth.user?.direction}"</h5>
                        <p>{auth.user?.direction}</p>
                    </div>
                </div>
            
        </div>
    
    )
}

export default Profile;