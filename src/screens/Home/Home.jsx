import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import "./home.scss";
import PropertyList from "../../components/PropertyList/PropertyList";
import { propertyData, homeData } from "../../dataSource";
import EmailList from "../../components/EmailList/EmailList";
function Home() {
  return (
    <div className="home">
      <div className="home_top">
        <NavBar />
        <Header type="home" />
      </div>
      <div className="home_content">
        <h1 className="carousel_title">Amazing Places. Amazing Stories.</h1>
        <Carousel />
        <div className="home_propertyList">
          <PropertyList
            data={propertyData}
            title="Browse by property type"
            height={250}
            width={300}
          />
          <PropertyList
            data={homeData}
            title="Homes people love"
            height={180}
            width={230}
          />
          <EmailList />
        </div>
      </div>
    </div>
  );
}

export default Home;
