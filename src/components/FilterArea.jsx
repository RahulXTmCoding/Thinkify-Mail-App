import React from "react";
import { connect } from "react-redux";
import { onFilterChange } from "../store/actions";
import "../styles/filter.css";

const FilterArea = ({ onFilter, filter }) => {
  return (
    <div className="filter-container">
      <span>Filter By:</span>
      <span
        className={filter === 0 ? "selected-filter" : "filter"}
        onClick={() => onFilter(0)}
      >
        All
      </span>
      <span
        className={filter === 1 ? "selected-filter" : "filter"}
        onClick={() => onFilter(1)}
      >
        Unread
      </span>
      <span
        className={filter === 2 ? "selected-filter" : "filter"}
        onClick={() => onFilter(2)}
      >
        Read
      </span>
      <span
        className={filter === 3 ? "selected-filter" : "filter"}
        onClick={() => onFilter(3)}
      >
        Favorites
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filter) => dispatch(onFilterChange(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterArea);
