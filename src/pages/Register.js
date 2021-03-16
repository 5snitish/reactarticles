import React,{useState,useRef} from "react";
import {useDispatch,useSelector} from 'react-redux'


import  Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import {isEmail}from "validator"

import {register} from '../actions/auth'
import "../css/Register.css"
import { Link } from "react-router-dom";
 




const required = (value)=>{
    if(!value){
        return (
            <div className ="alert alet-danger" role="alert">
                this field is required!
            </div>
        )
    }
}


const validEmail=(value)=>{
    if (!isEmail(value)){
        return(
        
             <div className ="alert alert-danger" role="alert">
                this is not a valid email!
            </div>
            )
    }

    
}


const vpassword=(value)=>{
    if(value.length<6|| value.length>40){
        return(
            <div className ="alert alert-danger" role="alert">
            password must be more then 6 charecters
        </div>
             )
    }
}


const Register = () => {
    const form = useRef()
    const checkBtn = useRef()


    const[email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [successful, setSuccessful]=useState(false)

const { message } = useSelector(state => state.message);
const dispatch = useDispatch();



    const onChangeEmail = (e)=>{
        const email = e.target.value
        setEmail(email)
    }

    const onChangeFirstname = (e)=>{
        const firstname = e.target.value
        setFirstname(firstname)
    
    }

    const onChangelastname = (e)=>{
        const lastname = e.target.value
        setLastname(lastname)
    }


    const onChangePassword = (e)=>{
        const password = e.target.value
        setPassword(password)
    }
    

    const handleRegister =  (e)=>{
        e.preventDefault()
        setSuccessful(false)

        form.current.validateAll()
        if(checkBtn.current.context._errors.length === 0){
         dispatch(register(email,email,password,firstname,lastname))
        .then(() =>{
            setSuccessful(true)

        }).catch(()=>{
            setSuccessful(false)
        })
    }
}

  return (


    
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><span>FATMUG |</span> Greetings!  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarScroll">
   
   
   
      <Link to="/"><button className="btn btn-outline-warning  " type="submit">login</button></Link>
     
  </div>
</nav>
    <div className="d-flex justify-content-center h-200"id = "register-main">
    <div className="card card-container">
       
    <div className= "card-header" style= {{textAlign:"Center"}}>
           
             
				<h3>REGISTER</h3>
				 
			</div>
      <Form   onSubmit={handleRegister} ref={form}>
        {!successful && (
          <div className = "container">
          <div className="row">
            <div className="form-group  d-inline ">
              <label htmlFor="username">FirstName</label>
              <Input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={onChangeFirstname}
                validations={[required ]}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="email">Last Name</label>
              <Input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={onChangelastname}
                validations={[required ]}
              />
            </div>
            </div>
            <div className="row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
            </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary  ">Sign Up</button>
            </div>
          </div>
        )}

        {message && (
          <div className="form-group">
            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
  
    </div>
  </div>
  </>
);
};


export default Register;
