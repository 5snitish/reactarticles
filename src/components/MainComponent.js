import React from 'react'
import '../components/maincomponent.css'
 
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

   
const MainComponent = ({article} ) => {

        
  
  
    
    return (
        <div class="card" id = "articles"   >
        <img src={article.image}  class="card-img-top"id= "img"alt="..."/>
        <div class="card-body">
        <h5 class="card-title"><span><b> {article.User.username}</b></span> in <span><b> topic</b></span></h5>
        <hr></hr>
          <h4 class="card-title">{article.tittle}</h4>
          <hr></hr>

          <p class="card-text">{article.discription}</p>
          <Link to = {`/article/${article.id}`}   style = {{paddingLeft:"85%"}}  ><button className="btn btn-outline-success">read more</button> </Link>
        </div>
      </div>  
    )
}

export default MainComponent
