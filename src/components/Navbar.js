import React from 'react'
import './Navbar.css'
import {Link, Redirect} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'

import {logout} from "../actions/auth"


const Navbar = () => {
const {user:currentUser} = useSelector((state)=>state.auth)

const dispatch  = useDispatch()
if(!currentUser){
  return <Redirect to="/"/>



}

const logOut = ()=>{
  dispatch(logout())
}

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/"><span>FATMUG |</span> Greetings! <b>{currentUser.user.username}</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarScroll">
   <div className="container-fluid " id= "bt">
  <Link to = "/create"><button className="btn btn-dark col-sm" type="submit">Write</button></Link>
  <Link to="/yourposts"><button className="btn btn-outline-warning col-sm " type="submit">your articles</button></Link>
     <Link to="/"><button className="btn btn-danger col-sm " onClick={logOut} type="submit">logout</button></Link>
      </div>
  </div>
</nav>
    )
}

export default Navbar
