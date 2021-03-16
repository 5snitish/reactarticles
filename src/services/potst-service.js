export default   function PostsHeader () {
    const token  = JSON.parse(localStorage.getItem("token"))
    
        return {Authorization:"Token "+ token,"Content-Type":"multipart/form-data"}
     
 


}