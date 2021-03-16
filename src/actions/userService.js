import{ARTICLES,GET_ARTICLE,CREATE_ARTICLE_SUCCESS,GET_USER_ARTICLES,DELETE_ARTICLE,UPDATE_ARTICLE} from './types'
import authHeader from '../services/auth-header'
import PostsHeader from '../services/potst-service'
import axios from 'axios'


const LoginUrl = 'https://articles-backend-api.herokuapp.com/api/'
 


export const getArticles=()=> async  (dispatch) =>{
      const data = await axios.get(LoginUrl,{headers:authHeader()})
      dispatch({
          type:ARTICLES,
          payload: data.data
          
      })
       
 
}

export const getArticle=(id)=> async  (dispatch) =>{
    const data = await axios.get(LoginUrl+id,{headers:authHeader()})
    dispatch({
        type:GET_ARTICLE,
        payload: data.data
    })
}



export const CreateArticle=(image,user,tittle,discription)=> async(dispatch) =>{
    var formData= new FormData()
    formData.append("image",image)
    formData.append("user",user)
    formData.append( "tittle",tittle)
    formData.append("discription",discription)
     

    console.log (formData)
     
    const data = await axios.post(LoginUrl,formData,{headers:PostsHeader()}
     
    )
    dispatch({
        type:CREATE_ARTICLE_SUCCESS,
        payload: data.data
    })
}
 

export const getUserArticles=()=> async  (dispatch) =>{
    const data = await axios.get('https://articles-backend-api.herokuapp.com/api/user_article_list/',{headers:authHeader()})
    dispatch({
        type:GET_USER_ARTICLES,
        payload: data.data
        
    })
}

export const DeleteArticle=(id)=> async  (dispatch) =>{
    const data = await axios.delete(LoginUrl+id,{headers:authHeader()})
    dispatch({
        type:DELETE_ARTICLE,
        payload: data.data
        
    })
}



export const UpdateArticle=( id,image,user,tittle,discription)=> async(dispatch) =>{
    var formData= new FormData()
    formData.append("image",image)
    formData.append("user",user)
    formData.append( "tittle",tittle)
    formData.append("discription",discription)
     

    console.log (formData)
     
    const data = await axios.put(LoginUrl+id+"/",formData,{headers:PostsHeader()}
     
    )
    dispatch({
        type:UPDATE_ARTICLE,
        payload: data.data
    })
}