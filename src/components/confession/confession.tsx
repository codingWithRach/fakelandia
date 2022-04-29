import ConfessionProvider from "../../context/ConfessionContext";
import ReasonForContact from "./reason_for_contact";
import Subject from "./subject";
import "./confession.css";
import ConfessionText from "./confession_text";
import ConfessButton from "./confess_button";
import DisabledProvider from "../../context/DisabledContext";

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
          <form className="confessionForm">
            <Subject />
            <ReasonForContact />
            <ConfessionText />
            <ConfessButton />
          </form>
        </ConfessionProvider>
      </DisabledProvider>
    </>
  );
};

export default Confession;
