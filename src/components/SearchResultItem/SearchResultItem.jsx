import React from "react";
import "./searchresultitem.scss";
import { Link } from "react-router-dom";

function SearchResultItem({ data }) {
  return (
    <div className="searchResultItem">
      <div className="total_properties">
        <h1>Dubai: {data.length} properties found</h1>
      </div>
      {data.map((item) => (
        <div className="searchResultItem_container">
          <div className="searchResult_left">
            <img src={item.image} alt="" />
          </div>
          <div className="searchResult_middle">
            <Link
              to="/hotels/123"
              style={{ textDecoration: "none", color: "#1363df" }}
            >
              <p className="title">{item.title}</p>
            </Link>
            <p className="distance">{item.distance}</p>
            <p
              className={
                item.taxi_availability
                  ? "taxi_availability free"
                  : "taxi_availability paid"
              }
            >
              {item.taxi_availability
                ? "Free airport taxi"
                : "Paid taxi available"}
            </p>
            <p className="description">{item.description}</p>
            <div className="feature_container">
              {item.features.map((feature, index) => (
                <>
                  <p className="features">{feature}</p>
                  {index !== item.features.length - 1 ? <p>•</p> : null}
                </>
              ))}
            </div>
            <div
              className={
                item.free_cancelation
                  ? "cancellation_container free"
                  : "cancellation_container paid"
              }
            >
              {item.free_cancelation ? (
                <>
                  <p className="cancellation_type">Free Cancellation</p>
                  <p className="cancellation_feedback">
                    You can cancel later, so lock in great price today
                  </p>
                </>
              ) : (
                <>
                  <p className="cancellation_type">No free cancellation</p>
                  <p className="cancellation_feedback">
                    Cancellation fee will be charged
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="searchResult_right">
            <div className="rating_container">
              <div className="rating">
                <p className="feedback">{item.feedback}</p>
                <p className="rating_number">{item.rating}</p>
              </div>
            </div>
            <div className="price_container">
              <div className="price">
                <p>₹ {item.price}</p>
                <p class="disclaimer">Includes taxes and other charges</p>
              </div>
              <button>See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultItem;
