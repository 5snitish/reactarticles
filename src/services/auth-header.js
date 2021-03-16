export default function authHeader () {
    const token  = JSON.parse(localStorage.getItem("token"))
    
        return {Authorization:"Token "+ token}
     
 


}


