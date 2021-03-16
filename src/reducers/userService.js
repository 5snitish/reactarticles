import {ARTICLES,GET_ARTICLE,CREATE_ARTICLE_SUCCESS,GET_USER_ARTICLES,DELETE_ARTICLE,UPDATE_ARTICLE} from '../actions/types'



const initialState =  {
    "articles": {
      
      "data": [
         
      ]
    },
    "userarticles": [
       
    ]
  }




export default function(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case ARTICLES:
            return {
                ...state,
                articles:payload 
            }
        case GET_ARTICLE: 
        return{
            ...state,
            article:payload
        }   

        case CREATE_ARTICLE_SUCCESS:
            return{
                ...state,
                message:payload
            }


        case GET_USER_ARTICLES:
            return{
                ...state,
                userarticles:payload
            }     
        case DELETE_ARTICLE:
            return{
                ...state,
                deleted:payload
            }    
            case UPDATE_ARTICLE:
              return{  ...state,
                updatearticle:payload
            }
        default:
            return state    
    }
} 

