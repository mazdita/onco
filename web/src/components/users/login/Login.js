

import { useContext , useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import service from "../../../services/user-service";

/*
function Login() {

  const history = useHistory()
  const auth = useContext(AuthContext)

  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'all' });
  const onLoginFormSubmit = data => {
    service.login(data.email, data.password)
      .then(user => {
        auth.login(user)
        history.push('/')
      })
      .catch(error => {
        const { message, errors } = error.response?.data || error;
        if (errors) {
          Object.keys(errors).forEach(input => {
            setError(input, { type: 'manual', message: errors[input] });
          })
        } else {
          setError('email', { type: 'manual', message: message });
        }
      })
  };

  return (
    <div className="row row-cols-3">
      <div className="col mx-auto">
        <form className="mt-3 mb-3" onSubmit={handleSubmit(onLoginFormSubmit)}>

          <div className="input-group mb-2">
            <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
            <input type="email" {...register("email", { required: 'Email is required' })}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="user@example.org" />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
            <input type="password" {...register("password", { required: 'Password is required' })}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit" disabled={Object.keys(errors).length !== 0}>Login</button>
            <hr />
            <a href="http://localhost:3001/api/authenticate/google" className="btn btn-danger" role="button"><i className="fa fa-google" /> Login with Google</a>
            <Link to="/signup" className="btn btn-secondary" role="button">Sign Up</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
*/


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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



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
      .catch(error => {
        setError(error.response.data.errors)
      })

    }

    return (
        <div id="img-login" className="bg-dark py-5" style={{backgroundImage: "url(/img/lazo.png)"}}>
          <div className="container">
            <div className="text-center">
              <h1 className="heading text-white mb-5">Wellcome Onconova</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group mx-sm-3">
                  <label>Email</label> 
                  <input name="email" type="text" value={email} placeholder="example@example.org" 
                  className={`form-control ${error ? 'is-invalid' : ''}`} onChange={e => setEmail(e.target.value)} />
                  {error?.email && <div className="invalid-feedback">{error?.email}</div>}
                </div>
  
                <div className="form-group  mx-sm-3">
                  <label>Password</label> 
                  <input name="password" type="password" value={password} className="form-control col-md-2" 
                  placeholder="Password" onChange={e => setPassword(e.target.value)} />
                  {error?.password && <div className="invalid-feedback">{error?.password}</div>}
                </div>
  
                <button className="btn btn-light btn-lg rounded-pill mt-3" type="submit">Log in</button>
               <Link to="/register"><button className="btn btn-light btn-lg rounded-pill mt-3" type="submit">Register</button></Link>
              </form>
  
              <a className="btn btn-light btn-lg rounded-pill mt-4" href="http://localhost:3001/api/authenticate/google"><i className="fa fa-google"></i>  Google Log</a>
              
            </div>
          </div>
        </div>
    );
  }
  
  export default Login;