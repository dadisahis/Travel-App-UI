import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Header type="home" />
    </div>
  );
}

export default Home;
