import React, { useState } from "react";
import "./searchcomponent.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import { useDetectClickOutside } from "../../hooks/useDetectClick";
function SearchComponent() {
  const dateRef = useDetectClickOutside(() => setOpenDate(false));
  const optionRef = useDetectClickOutside(() => setOpenOptions(false));
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState([
    {
      title: "Adult",
      count: 2,
    },
    {
      title: "Children",
      count: 0,
    },
    {
      title: "Room",
      count: 1,
    },
  ]);
  function increaseCount(title) {
    setOptions(
      options.map((item) =>
        item.title === title ? { ...item, count: item.count + 1 } : item
      )
    );
  }
  function decreaseCount(title) {
    setOptions(
      options.map((item) =>
        item.title === title ? { ...item, count: item.count - 1 } : item
      )
    );
  }
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <div className="search">
      <div className="search_container">
        <div className="search_title">Search</div>
        <div className="search_items">
          <div className="search_item">
            <p className="item_title">Destination</p>
            <input type="text" className="search_input" />
          </div>
          <div className="search_item" ref={dateRef}>
            <p className="item_title">Check in - Check out date</p>
            <div className="item_container">
              <CalendarMonthIcon />
              <span
                className="searchBoxText"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
            </div>
            {openDate ? (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="daterange"
              />
            ) : null}
          </div>
          <div className="search_item" ref={optionRef}>
            <p className="item_title">Check in - Check out date</p>
            <div className="item_container">
              <PeopleIcon />
              <span
                className="searchBoxText"
                onClick={() => {
                  setOpenOptions(!openOptions);
                }}
              >{`${options[0].count} adult | ${options[1].count} children | ${options[2].count} room`}</span>
            </div>
            {openOptions ? (
              <div className="optionSelector">
                {options.map((item) => (
                  <div className="optionSelectorItem">
                    <div className="optionSelectorItem_left">
                      <p>{item.title}</p>
                    </div>
                    <div className="optionSelectorItem_right">
                      <button
                        disabled={item.count < 1}
                        onClick={() => {
                          decreaseCount(item.title);
                        }}
                      >
                        -
                      </button>
                      <p>{item.count}</p>
                      <button
                        onClick={() => {
                          increaseCount(item.title);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="search_item">
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
