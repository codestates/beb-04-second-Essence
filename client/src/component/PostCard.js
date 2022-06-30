import React from "react";

const PostCard = ({ item }) => {
  return (
    <div>
      <img src = {item?.img} alt = "item"/>
      <div>POST</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default PostCard;