 
 import {getUserArticles} from "../actions/userService"
import Userarticle  from "../components/Userarticle"
import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
  
import '../components/Navbar.css'
import {useSelector,useDispatch} from "react-redux"
 
const UserArticles = () => {

  const uarticles = useSelector((state)=>state.userService)
   
  
   const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getUserArticles( ));
},[])


    return (
        <>
        <Navbar/>

        <div class="card">
        <div class="card-header   "  >
    YOUR SUBMITTED ARTICLES
  </div>

       { uarticles.userarticles.map((article)=>(
            <Userarticle article={article}   />
       ))}
        </div>    
        </>
    )
}

export default UserArticles
