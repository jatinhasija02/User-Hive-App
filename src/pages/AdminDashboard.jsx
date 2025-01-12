import axios from "axios";
import React, { useEffect, useState } from "react";
import { userMedia } from "../../backend/profiledata";
import styles from "./profile.module.css";

const AdminDashboard = () => {
  let adminID = sessionStorage.getItem("adminID");
  console.log(adminID);

  let [adminLoggedInUser, setAdminLoggedInUser] = useState({});

  useEffect(() => {
    async function getAdminUser() {
      let { data } = await axios.get(`http://localhost:404/users/${adminID}`);
      console.log(data);
      setAdminLoggedInUser(data);
    }
    getAdminUser();
  }, []);
  return (
    <div id={styles.profilecontainer}>
      <header>
        <h1>Welcome {adminLoggedInUser.username}</h1>
        <p>email : {adminLoggedInUser.email}</p>
      </header>
      <section className={styles.postsContainer}>
        {userMedia.map((post) => (
          <article key={post.id} className={styles.card}>
            <img
              src={post.url}
              alt={post.description}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{post.description}</h3>
              <p className={styles.likes}>❤️ {post.likes} likes</p>
              <ul className={styles.tags}>
                {post.tags.map((tag, index) => (
                  <li key={index} className={styles.tag}>
                    #{tag}
                  </li>
                ))}
              </ul>
              <div className={styles.comments}>
                <h4>Comments</h4>
                {post.comments.map((comment, index) => (
                  <p key={index}>
                    <strong>User {comment.userId}:</strong> {comment.text}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default AdminDashboard;
