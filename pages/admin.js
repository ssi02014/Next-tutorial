import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Admin = () => {
  const router = useRouter();

  const checkLogin = () => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
      } else {
        router.push("/login");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return <div>admin</div>;
};

export default Admin;
