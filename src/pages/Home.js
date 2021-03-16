import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MainComponent from '../components/MainComponent'
import '../components/Navbar.css'
import {useSelector,useDispatch} from "react-redux"
import {getArticles} from "../actions/userService"
 

const Home = () => {
        
   const dispatch=useDispatch()
  
   useEffect(()=>{
    loadarticles()
},[]) 


  
const loadarticles=()=>{
    dispatch(getArticles( ));
}


const articles = useSelector((state)=> state.userService.articles )
 

   
if (articles === undefined) {
    return <h1>loading..</h1>;
  }else{
    
   return (
     
        <>
        
        <Navbar/>
        <div class="list-group-flush "id = 'Sidebar'>
        <div class = "container-fluid" id = "top-articles"><span>Top Articles</span></div>
       
       
        {  articles.data.map((article)=>( 
        <Sidebar  key={article.id} article={article}/>
        ))}
 
</div>

        {  articles.data.map((article)=>(
        <MainComponent key={article.id} article={article}  />
        ))}
         
        </>
    )
        }
}

export default Home
