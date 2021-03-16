import axios from '../../node_modules/axios'


const API_URL = "https://articles-backend-api.herokuapp.com/api/"
 

const register  = (username, email,password,first_name,last_name)=>{
return axios.post(API_URL + "register/",{
     username,
      
     email,
     password,
     first_name,
     last_name,
}).then((response)=>{
    return response
})

}

const login = (username, password)=>{
    return axios.post(API_URL + "login/",{
        username,
        password,
    }).then ((response)=>{
        if(response.data.token){
            localStorage.setItem("token",JSON.stringify(response.data.token))
        }
        return response.data
    }
    )
}
const logout = ()=>{
    localStorage.removeItem("token")
}

 
export default {
    register,
    login,
    logout
}