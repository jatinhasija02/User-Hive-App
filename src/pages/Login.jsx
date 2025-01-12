import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { data, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginuser, setLoginuser] = useState({
    email: "",
    password: "",
  });

  const [registeredUser, setRegisterUser] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    async function getSignupUsers() {
      let { data } = await axios.get("http://localhost:404/users");
      // console.log(data);
      setRegisterUser(data); //storing data to state
    }
    getSignupUsers();
  }, []);

  const handleChange = (e) => {
    //e Stroes SynthethicBaseEvent
    const { name, value } = e.target;
    setLoginuser({
      ...loginuser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginuser);

    let authUser = registeredUser.find((user) => {
      return (
        user.email === loginuser.email && user.password === loginuser.password
      );
    });
    console.log(authUser);

    if (
      authUser?.email === "admin@gmail.com" &&
      authUser?.password === "admin123"
    ) {
      // navigate to profile page
      navigate("/admindashboard");
      //authUser id set in session storage
      sessionStorage.setItem("adminID", authUser.id);
    } else if (authUser) {
      // navigate to profile page
      navigate("/profile");
      //authUser id set in session storage
      sessionStorage.setItem("userID", authUser.id);
    } else {
      //POP-UP for not registered
      toast.error("not registered");
      //navigate to signup page
      navigate("/signup");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={loginuser.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={loginuser.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
