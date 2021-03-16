import {Redirect} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import React, {useState,useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  '../css/login.css'

import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import {login}from "../actions/auth"
 

const required  = (value)=>{
	if(!value){
		return (
			<div className="alert alert-danger" role="alert">
				this fiels is required!
			</div>
		)
	}
}


const Login =(props)=>{
	const form  = useRef()
	const checkbtn = useRef()
		 
	const [username,setUsername] = useState ("")
	const[password,setPassword] = useState("")
	const [loading,setLoading] = useState(false)



	const {isLoggedIn} =  useSelector(state=>state.auth)
	const {message} = useSelector(state=>state.message)

	const dispatch  = useDispatch()


	const onChangeUsername = (e)=>{
		const username = e.target.value
		setUsername(username)
	}
	const onChangePassword = (e)=>{
		const password = e.target.value
		setPassword(password)
	}


	const HandleLogin = (e)=>{
		e.preventDefault()
		setLoading(true)

		form.current.validateAll()


		if (checkbtn.current.context._errors.length === 0){
		dispatch(login(username,password))
		.then(() => {
			props.hstory.push('/home')
			window.location.reload()	
			
		})
		.catch(()=>{
			setLoading(false)
		})
	}else{
		setLoading(false)
	}}

	if (isLoggedIn){
		return <Redirect to = "/home"/>
	
	}
return (
	<>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><span>FATMUG |</span> Greetings!  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarScroll">
   
   
   
     
  </div>
</nav>
  <div className= "container">
	<div className= "d-flex justify-content-center h-100">
		<div className= "card" id = "login-card">
			<div className= "card-header" style= {{textAlign:"Center"}}>
            <span><a href="/register"> Create an account </a></span>
            <br></br>
            <br></br>
				<h3>Sign In</h3>
				 
			</div>
			<div className= "card-body">
				<Form method = "POST" onSubmit={HandleLogin} ref={form}   >
					<div className= "input-group form-group">
						<div className= "input-group-prepend">
							<span className= "input-group-text"><i className= "fas fa-user"></i></span>
						</div>
						<Input type="text" className= "form-control" name = 'username' 
						value = {username}
						 onChange = {onChangeUsername} 
						 validations = {[required]}  
						  placeholder="username"/>
						
					</div>
					<div className= "input-group form-group">
						<div className= "input-group-prepend">
							<span className= "input-group-text"><i className= "fas fa-key"></i></span>
						</div>
						<Input type="password" 
						className= "form-control" name = "password" onChange={onChangePassword} value = {password}
						validations = {[required]} 
						placeholder="password"/>
					</div>
					 
					<div className= "form-group">
						<button type="submit" value="Login" className= "btn btn-primary" disabled ={loading}>
						{
							loading &&(<span className = "spinner-border spinner-border-sm"></span>
						)}
						<span>Login</span>

						</button>
					</div>
					{message && (
            <div className="form-group">    
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkbtn} />
				</Form>
			</div>
			<div className= "card-footer">
				<div className= "d-flex justify-content-center links">
					 <a href="/register">Not a Member Yet?</a>
				</div>
				<div className= "d-flex justify-content-center">
					<a href="/">Forgot your password?</a>
				</div>
			</div>
		</div>
        </div>
	</div>
 
</>
)
} 


export default Login