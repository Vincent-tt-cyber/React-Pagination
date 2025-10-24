import React from "react";
import styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <h3>
        {post.id} - {post.title}
      </h3>
      <p>{post.body}</p>
      <b>UserID: {post.userId}</b>
    </div>
  );
};

export default PostCard;
