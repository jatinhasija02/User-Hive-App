import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  let admminID = sessionStorage.getItem("adminID");
  console.log(admminID);

  let [adminLoggedInUser, setAdminLoggedInUser] = useState(null);

  useEffect(() => {
    async function getAdminUser() {
      let { data } = await axios.get(`http://localhost:4041/users/${admminID}`);
      console.log(data);
      setAdminLoggedInUser(data);
    }
    getAdminUser();
  }, []);
  return (
    <div>
      <h1>Wecome {adminLoggedInUser?.username}</h1>
      <h2>Email: {adminLoggedInUser?.email}</h2>
      <h2>PhoneNo: {adminLoggedInUser?.phoneno}</h2>
      <h2>Gender: {adminLoggedInUser?.gender}</h2>
    </div>
  );
};

export default AdminDashboard;
