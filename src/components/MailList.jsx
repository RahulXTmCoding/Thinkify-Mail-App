import React from "react";
import { connect } from "react-redux";
import "../styles/filter.css";
import MailItem from "./MailItem";

const MailList = ({
  selected,
  emails = [],
  setSelected,
  filter,
  favorites,
  read,
}) => {
  const onFilter = (id) => {
    if (filter === 1) {
      return !read[id];
    }
    if (filter === 2) {
      return read[id];
    }
    if (filter === 3) {
      return favorites[id];
    }
    return true;
  };
  const filteredList = emails.filter((mail) => {
    const id = mail.id;
    return onFilter(id);
  });
  return (
    <div
      className={`mail-list-container ${selected ? "mail-list-small " : ""}`}
    >
      {filteredList.length ? (
        filteredList.map((mail) => {
          return (
            <MailItem
              mail={mail}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })
      ) : (
        <p>No Emails in this section</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    emails: state.emails,
    favorites: state.favorites,
    read: state.read,
  };
};

export default connect(mapStateToProps, null)(MailList);
