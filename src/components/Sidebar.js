import React from 'react'
import "./Sidebar.css"
import {Link} from 'react-router-dom'

const Sidebar = ({article}) => {
    return (
        <div className="container-fluid">
        <Link to={`/article/${article.id}`}>
          <div class="d-flex w-100 justify-content-between">
             <div class="card-body">
  <div class ="row  "> 
  <div class="col-sm align-content-center " style={{padding:"0px"}}>
<img  src={article.image}  style={{height:"100px", width:"100px"}} className= "rounded float-left" alt=""/> 
</div> 

<div class="col-sm">
    <h4 class="card-title">{article.tittle} </h4>
    <p class="card-text">{article.User.username}</p>
    
  </div>
  
 
  </div>
  
</div>
        
      </div>
      <hr></hr>
      </Link>
      </div>
    )
}

export default Sidebar
