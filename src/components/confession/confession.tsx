import ConfessionProvider from "../../context/ConfessionContext";
import "./confession.css";
import DisabledProvider from "../../context/DisabledContext";
import React from "react";
import ConfessionForm from "./confession_form";

const Confession: React.FC = () => {
  return (
    <>
      <h1 className="pageHeading">Confession</h1>
      <div className="pageText">
        It's very difficult to catch people committing misdemeanours so we
        appreciate it when citizens confess to us directly.
      </div>
      <div className="pageText">
        However, if you're just having a hard day and need to vent then you're
        welcome to contact us here too. Up to you!
      </div>
      <DisabledProvider>
        <ConfessionProvider>
          <ConfessionForm />
        </ConfessionProvider>
      </DisabledProvider>
    </>
  );
};

export default Confession;
