

import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import service from "../../../services/user-service";

const EMAIL_PATTERN = /\S+@\S+\.\S+/;

const validations = {
   email: (value) => {
     let message;
    if (value && !EMAIL_PATTERN.test(value)) {
      message = 'Email or password is not correct';
    }
     return message;
   },
   password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    }
    return message;
  },
}

function Login() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();


  function handleSubmit(event) {
    event.preventDefault() 

    service.login({
      email: event.target.email.value,
      password: event.target.password.value,
    })
      .then((user) => {
        auth.login(user)
        history.push("/")
      })
      .catch(() => {
        setError(error.response.data.errors)
      })

    }

    return (
        <div id="img-login" className="bg-dark py-5" style={{backgroundImage: "url(/img/loginbg.jpg)"}}>
          <div className="container">
            <div className="text-center">
              <h1 className="heading mb-5">Onco</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group mx-sm-3">
                  <label>Email</label> 
                  <input name="email" type="text" value={data.email} placeholder="example@example.org" 
                  className={`form-control ${error ? 'is-invalid' : ''}`} />
                  {error?.email && <div className="invalid-feedback">{error?.email}</div>}
                </div>
  
                <div className="form-group mx-sm-3">
                  <label>Password</label> 
                  <input name="password" type="password" value={data.password} className="form-control col-md-2" 
                  placeholder="Password" />
                  {error?.password && <div className="invalid-feedback">{error?.password}</div>}
                </div>
  
                <button className="btn btn-primary btn-lg rounded-pill mt-3" type="submit">Log in</button>
              </form>
  
              <a className="btn btn-primary btn-lg rounded-pill mt-4" href="http://localhost:3001/api/authenticate/google"><i className="fa fa-google"></i> Log in with Google</a>
              
              <p className="mt-3">First time here? <Link to="/users"/>Register</p>
            </div>
          </div>
        </div>
    );
  }
  
  export default Login;