import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./singleitem.scss";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { singleHotelData } from "../../dataSource";
import EmailList from "../../components/EmailList/EmailList";
function SingleItem() {
  return (
    <div className="singleitem">
      <NavBar />
      <Header type="item" />
      <div className="singleitem_content">
        <div className="singleitem_wrapper">
          <div className="top_container">
            <div className="title_container">
              <h1 className="title">{singleHotelData.hotel_name}</h1>
              <div className="location">
                <FmdGoodIcon />
                <p className="address">{singleHotelData.address}</p>
              </div>
            </div>
            <button>Reserve or Book Now</button>
          </div>
          <div className="location_container">
            <p className="landmark">
              Excellent location - {singleHotelData.landmark}
            </p>
            <p className="scheme">{singleHotelData.scheme}</p>
          </div>
          <div className="image_container">
            {singleHotelData.images.map((item) => (
              <img src={item.url} alt="" />
            ))}
          </div>
          <div className="bottom_container">
            <div className="hotel_details">
              <div className="hotel_details_container">
                <h1>{singleHotelData.hotel.title}</h1>
                <p>{singleHotelData.hotel.description}</p>
              </div>
            </div>
            <div className="hotel_card">
              <div className="hotel_card_container">
                <p className="hotel_card_title">
                  {singleHotelData.features[0]}
                </p>
                <p className="hotel_card_description">
                  {singleHotelData.features[1]}
                </p>
                <p className="hotel_card_deal">
                  <b>{singleHotelData.features[2]}</b>
                </p>
                <button>Reserve or Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailList />
    </div>
  );
}

export default SingleItem;
