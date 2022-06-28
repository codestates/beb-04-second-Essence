import React, { useState } from "react";
import "./styles.css";
import postdata from "./postdata.json";

function PostWrite() {
  console.log(postdata); //getting data from jaon

  // const { postdata } = props;

  const [title, setTitle] = useState(""); //s7
  const [post, setPost] = useState("");

  function handleClick() {
    console.log(title);
    console.log(post);
  }

  return (
    <>
      <div className="mainform">
        <h1 id="mainheader">게시글 작성페이지</h1>
        <form className="add-post-form" id="form">
          <div className="form-Group">
            <label className="form-label">
              <h3>게시글 제목</h3>
            </label>
            <input
              name="title"
              value={title} //s8
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="textvalue"
              required="required"
              placeholder="Title"
            />
          </div>
          <div className="form-Group">
            <label className="form-label">
              <h3>게시글 내용 작성</h3>
            </label>
            <textarea
              name="post"
              value={post} //s8
              onChange={(e) => setPost(e.target.value)}
              className="form-control"
              id="postarea"
              rows="3"
              required="required"
              placeholder="write a post here"
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={handleClick()}
              type="submit"
              className="btn btn-primary"
            >
              Add New Post
            </button>
          </div>
        </form>
      </div>

      <div id="cardbody" className="row" style={{ columnGap: "20px" }}>
        {postdata.map((i) => {
          return (
            <div
              className="card"
              style={{
                width: "18rem",
                background: i % 2 === 0 ? "white" : "lightgray"
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{i.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{i.id}</h6>
                <p className="card-text">{i.post}</p>
                <button
                  type="button"
                  className="btn btn-link"

                >
                  update
                </button>
                <button
                  type="button"
                  className="btn btn-link"

                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostWrite;
