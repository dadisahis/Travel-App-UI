import React from "react";
import "./propertylist.scss";

function PropertyList({ data, title, height, width }) {
  return (
    <div className="propertyList">
      <div className="title_container">
        <h1 className="propertyList_title">{title}</h1>
      </div>
      <div className="propertyList_container">
        {data.map((item) => (
          <div className="propertyList_item">
            <img
              src={item.image}
              alt=""
              className="propertyList_img"
              style={{ height: `${height}px`, width: `${width}px` }}
            />
            <div className="propertyList_titles">
              <h1>{item.title}</h1>
              <h2>{item.subtitle}</h2>
            </div>
            {item.price ? (
              <div className="propertyList_price">
                <h2>Starting from {item.price}</h2>
              </div>
            ) : null}
            {item.rating ? (
              <div className="propertyList_ratingdata">
                <p className="rating">{item.rating}</p>
                <p className="feedback">{item.feedback}</p>
                <p>|</p>
                <p className="review_count">{item.review_count} reviews</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
