import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { Switch,Route,BrowserRouter as Router } from "react-router-dom"


import store from "./store"


 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostComponent from './components/PostComponent';
import CreateArticleComponent from './components/CreateArticleComponent';

import UserArticles from './pages/UserArticles';
 import EditArticle from './components/EditArticle'


ReactDOM.render(
 <Provider store = {store}>
 <Router>
   <Switch>
   <Route exact path="/edit_article/:id" component={EditArticle} />
   <Route exact path="/yourposts" component={UserArticles}/>
      <Route exact path = "/create" component = {CreateArticleComponent}/>
      <Route exact path = "/article/:id" component = {PostComponent}/>
     <Route exact path = '/' component = {Login}    />
     <Route exact path = '/home' component = {Home}    />
     <Route exact path = '/register' component=  {Register}/ >   </Switch>
 </Router>
    
 </Provider>,
  document.getElementById('root')
);
 
