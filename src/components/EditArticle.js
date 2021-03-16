import { Link } from "react-router-dom";
import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import{useParams,useHistory}from 'react-router-dom'
import {getArticle,UpdateArticle} from '../actions/userService'
 
 
import "../css/createArticle.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
 
  
const EditArticle = () => {
    
        let history =  useHistory();
        const dispatch = useDispatch();
        const { user: cuser } = useSelector((state) => state.auth.user);
        const post = useSelector((state) => state.userService.article.data);
        console.log(post)
        const { id } = useParams();
        const [tittle, setTittle] = useState("");
        const [discription, setDiscription] = useState("");
        const [image,setImage] = useState(null)
      
        useEffect(() => {
           loadPost()
        }, []);
        useEffect(() => {
          if (post) {
            setTittle(post.tittle);
            setDiscription(post.discription);
            setImage(post.image)
          }
        }, [post]);
        const loadPost = () => {
          dispatch(getArticle(id));
        };
        const submitForm = (e) => {
          e.preventDefault();
          dispatch(UpdateArticle(post.id,image,cuser.id, tittle, discription))
      
          
          history.push("/yourposts");
        };

  

  return (
    <>

      <Form method="post"  onSubmit={submitForm} >
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <span>FATMUG |</span> Greetings! <b>{cuser.username} </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarScroll">
           
          <button className="btn btn-warning" type="submit">
              update
            </button> 

            
              <button className="btn btn-danger ">home</button>
            
          </div>
        </nav>

        <div class="container contact">
          <div class="row">
            <div
              class="col-md-9"
              style={{
                marginTop: "-50px",
                border: "1px solid ",
                marginLeft: "10%",
              }}
            >
              <div class="contact-form">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="fname">
                    Tittle
                  </label>
                  <div class="col-sm-10">
                  
                    <Input
                      type="text"
                      class="form-control"
                      id="fname"
                      
                      value={tittle}
                      onChange={(e) => setTittle(e.target.value)}
                      placeholder="tittle"
                      name="tittle"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="lname">
                    Image:
                  </label>
                  <div class="col-sm-10">
                    <Input
                      type="file"
                      class="form-control "
                      id="lname"
                       
                      name="image"
                       
                      onChange={(e) => setImage(e.target.files[0])}
                      filename={image}

                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-sm-2" for="comment">
                    Discription
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      value={discription}
                      

                      onChange={(e) => setDiscription(e.target.value)}
                      name="discription"
                    ></textarea>
                    
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </Form>
    </>
  );
};

export default EditArticle