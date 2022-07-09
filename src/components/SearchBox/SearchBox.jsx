import React, { useState } from "react";
import "./searchbox.scss";
import KingBedIcon from "@mui/icons-material/KingBed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useRef } from "react";
import { useEffect } from "react";
function SearchBox() {
  function useDetectClickOutside(callback, initialValue = null) {
    const elementRef = useRef(initialValue);
    useEffect(() => {
      function handler(event) {
        if (!elementRef.current?.contains(event.target)) {
          callback();
        }
      }
      window.addEventListener("click", handler);
      return () => window.removeEventListener("click", handler);
    }, [callback]);
    return elementRef;
  }
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
    <div className="searchbox">
      <div className="searchboxItem">
        <KingBedIcon />
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="headerSearchInput"
        />
      </div>
      <div className="searchboxItem" ref={dateRef}>
        <CalendarMonthIcon />
        <span className="searchBoxText" onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>
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
      <div className="searchboxItem" ref={optionRef}>
        <PeopleIcon />
        <span
          className="searchBoxText"
          onClick={() => {
            setOpenOptions(!openOptions);
          }}
        >{`${options[0].count} adult | ${options[1].count} children | ${options[2].count} room`}</span>
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
      <div className="searchboxItem">
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
