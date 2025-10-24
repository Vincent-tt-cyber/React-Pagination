import React from "react";
import PostCard from "../PostCard/POstCard";
import styles from "./PostsList.module.css";

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
