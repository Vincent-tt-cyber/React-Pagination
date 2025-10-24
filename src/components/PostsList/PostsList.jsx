import React from "react";
import styles from "./PostsList.module.css";
import PostCard from "../PostCard/PostCard";
const PostsList = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
