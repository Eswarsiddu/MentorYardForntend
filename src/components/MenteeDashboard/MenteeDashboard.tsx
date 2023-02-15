import "./MenteeDashboard.css";
import AllMentors from "./AllMentors";
import { useState } from "react";
import { ChatBlock } from "../ChatBlock/ChatBlock";
export default function () {
  const TABS = {
    ALLMENTEES: "allmentees",
    CHAT: "CHAT",
  };
  const [tab, setTab] = useState(TABS.ALLMENTEES);
  return (
    <div>
      <div className="dashboard__tab">
        <p
          className={tab == TABS.ALLMENTEES ? "tab__active" : ""}
          onClick={() => setTab(TABS.ALLMENTEES)}
        >
          All Mentees
        </p>
        <p
          className={tab == TABS.CHAT ? "tab__active" : ""}
          onClick={() => setTab(TABS.CHAT)}
        >
          My mentees
        </p>
      </div>
      <div>{tab == TABS.ALLMENTEES ? <AllMentors /> : <ChatBlock />}</div>
    </div>
  );
}
