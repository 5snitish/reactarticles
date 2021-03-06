import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import {DeleteArticle} from "../actions/userService"
import {Link} from 'react-router-dom' 
 import{getUserArticles}from '../actions/userService'
 
import '../css/userarticle.css';
 
const  Userarticle = ({article}) => {
    
    const dispatch = useDispatch()
    
     
  
    useEffect(()=>{
      dispatch(getUserArticles( ));
  },[])
 

    


     
    return (
        <>
         
        
 
  <div  className="card-body">
  
  <div class ="row"> 
  <div  className="col-sm align-content-center " style={{padding:"0px"}}>
<img  src={article.image}  style={{height:"150px", width:"150px"}} className= "rounded float-left"  alt=""/> 
</div> 

<div  className="col-sm">
    <h4  className="card-title">{article.tittle} </h4>
    <p  className="card-text">{article.discription}</p>
     
  </div>
  
  <div  className="col-sm">

   <Link to ={`/edit_article/${article.id}`}><button className="btn btn-warning">edit </button> </Link>
   <Link to ="/yourposts"> <button   onClick={()=> dispatch(DeleteArticle(article.id))} className="btn btn-danger"> delete </button>  </Link>


  </div>
  </div>
  
</div>
 

                            
                            
                         
                     
                     
 
      </>
    );
  };
   

export default Userarticle
