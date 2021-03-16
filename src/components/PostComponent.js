import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../actions/userService";
import { useParams } from "react-router-dom";
import "../components/maincomponent.css";

const PostComponent = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.userService.article);
  const { id } = useParams();
  console.log(id);
  console.log(article);
  useEffect(() => {
    loadArticle();
  }, []);
  const loadArticle = () => {
    dispatch(getArticle(id));
  };

  if (!article) {
    return <h1>loading..</h1>;
  }
  return (
    <>
      <Navbar />
      <div
        class="col-lg-8"
        style={{ marginLeft: "20%"  }}
      >
        <h1 class="mt-4 ">{article.data.tittle}</h1>

        <hr />

        <p>Posted on {article.data.datetimestamp}</p>

        <hr />

        <img
          class="img-fluid img-top"
          src={article.data.image}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />

        <hr />

        <p class="lead"> {article.data.discription}</p>
      </div>
    </>
  );
};

export default PostComponent;
