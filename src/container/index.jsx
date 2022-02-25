import React, { useState } from "react";
import EmailBody from "../components/EmailBody";
import Filter from "../components/FilterArea";
import MailList from "../components/MailList";
import "../styles/main.css";

const MailApp = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <Filter />
      <row className="row gap20 mail-container">
        <MailList selected={selected} setSelected={setSelected} />
        {selected ? <EmailBody selected={selected} /> : null}
      </row>
    </div>
  );
};

export default MailApp;
