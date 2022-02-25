import React from "react";
import "../styles/mailItem.css";
import "../styles/main.css";
import { connect } from "react-redux";
import { formatDate } from "../utils";
import { onSelect } from "../store/actions";
import CircularLogo from "./CircularLogo";

const MailItem = ({
  selected,
  favorites,
  onClick,
  mail,
  setSelected,
  read,
}) => {
  return (
    <row
      className={`mail-item-container ${
        read[mail?.id] ? "mail-item-read" : ""
      } ${mail?.id === selected?.id ? "mail-item-selected" : ""}`}
      onClick={() => {
        onClick(mail?.id);
        setSelected(mail);
      }}
    >
      <CircularLogo selected={mail} />
      <span className="mail-item-content">
        <div className="medium-font">
          From:{" "}
          <span className="fsb">{`${mail?.from?.name} <${mail?.from?.email}>`}</span>
        </div>
        <div className="medium-font text-overflow">
          Subject: <span className="fsb">{`${mail?.subject}`}</span>
        </div>
        <div className="medium-font text-overflow">
          {mail?.short_description}
        </div>
        <div className="medium-font">
          {`${formatDate(mail?.date)}`}{" "}
          <span className="mail-fav">
            {favorites[mail?.id] ? "Favorite" : ""}
          </span>
        </div>
      </span>
    </row>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    favorites: state.favorites,
    read: state.read,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(onSelect(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MailItem);
