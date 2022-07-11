import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import "./list.scss";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import SearchResultItem from "../../components/SearchResultItem/SearchResultItem";
import { searchResultData } from "../../dataSource";
import EmailList from "../../components/EmailList/EmailList";
function List() {
  return (
    <div className="list">
      <NavBar />
      <Header type="list" />
      <div className="list_content">
        <div className="list_wrapper">
          <div className="search_component">
            <SearchComponent />
          </div>
          <div className="result_component">
            <SearchResultItem data={searchResultData} />
          </div>
        </div>
      </div>
      <EmailList />
    </div>
  );
}

export default List;
