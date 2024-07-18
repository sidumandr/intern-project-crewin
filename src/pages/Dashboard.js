import React from "react";
import Welcome from "../components/Welcome";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  return (
    <div>
      <Welcome onLogin={handleLogin} />
    </div>
  );
};

export default Dashboard;
