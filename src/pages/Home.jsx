import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>User Hive App</h1>
        <p>Welcome to the user management system. Manage users efficiently!</p>
      </header>
    </section>
  );
};
export default Home;
