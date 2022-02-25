import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getEmailById } from "../services";
import { onMarkFavorite, onUnMarkFavorite } from "../store/actions";
import "../styles/mailBody.css";
import "../styles/main.css";
import { formatDate } from "../utils";
import CircularLogo from "./CircularLogo";

const EmailBody = ({ selected, favorites, onFavorite, onUnFavorite }) => {
  const [emailBody, setEmailBody] = useState({});
  useEffect(() => {
    if (selected?.id) {
      getEmailById(selected?.id).then((response) => {
        setEmailBody(response);
      });
    }
  }, [selected?.id]);

  return (
    <row className="mail-item-container mail-body-container">
      <CircularLogo selected={selected} />
      <span className="mail-item-content">
        <h1 className="very-large-font fsb mt0 mb0">{selected?.subject}</h1>
        <p className="medium-font">{formatDate(selected?.date)}</p>
        <div dangerouslySetInnerHTML={{ __html: emailBody.body }} />
      </span>
      <button
        className="fav-button small-font"
        onClick={() => {
          console.log(favorites, onUnFavorite, onFavorite);
          favorites[selected?.id]
            ? onUnFavorite(selected?.id)
            : onFavorite(selected?.id);
        }}
      >
        {favorites[selected?.id] ? "Unmark Favorite" : "Mark as Favorite"}
      </button>
    </row>
  );
};
const mapStateToProps = (state) => {
  return {
    favorites: state?.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFavorite: (id) => dispatch(onMarkFavorite(id)),
    onUnFavorite: (id) => dispatch(onUnMarkFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailBody);
