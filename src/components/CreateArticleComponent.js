import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { CreateArticle } from "../actions/userService";
import "../css/createArticle.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
 
 
 

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        this field is required!
      </div>
    );
  }
};

const CreateArticleComponent = () => {
  const form = useRef();
  

  const { user: cuser } = useSelector((state) => state.auth.user);

  const [tittle, settittle] = useState("");

  const [discription, setDiscription] = useState("");
  const [image,setImage]=useState(null)
  

   

      

  const dispatch = useDispatch();

  const onChangeTittle = (e) => {
    const tittle = e.target.value;
    settittle(tittle);
   
  };

  const onChangeImage=(e)=>{
      const image = e.target.files[0];
       
      setImage(image)
  }

  const onChangeDiscription = (e) => {
    const disc = e.target.value;
    setDiscription(disc);
  };
 
  const handleCreate = (e) => {
    e.preventDefault();
     
 
      dispatch(CreateArticle(image,cuser.id, tittle, discription))
        .then(() => {
          
        })
        .catch(() => {
          
        });
 
  };


  

  return (
    <>

      <Form method="post"  onSubmit={handleCreate} ref={form}>
     
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
           
          <button className="btn btn-dark" type="submit">
              Publish
            </button> 

            <Link to="/">
              <button className="btn btn-danger ">home</button>
            </Link>
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
                  <label class="control-label col-sm-2"  html htmlFor="fname">
                    Tittle
                  </label>
                  <div class="col-sm-10">
                  
                    <Input
                      type="text"
                      class="form-control"
                      id="fname"
                      onChange={onChangeTittle}
                      value={tittle}
                      validations = {[required]}
                      placeholder="tittle"
                      name="tittle"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2"  htmlFor="lname">
                    Image:
                  </label>
                  <div class="col-sm-10">
                    <Input
                      type="file"
                      class="form-control "
                      id="lname"
                       
                      name="image"
                      validations = {[required]}
                      onChange={onChangeImage}
                      filename={image}

                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-sm-2"  htmlFor="comment">
                    Discription
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      value={discription}
                      

                      onChange={onChangeDiscription}
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

export default CreateArticleComponent;
