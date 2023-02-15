import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROLES from "../../types/RolesEnum";
import { AccountInfo } from "./AccountInfo";
import { BioInfo } from "./BioInfo";
import "./Profile.css";
const enum TABS {
  BIOINFO,
  ACCOUNTINFO,
}
export default function Profile() {
  const [tab, setTab] = useState<TABS>(TABS.BIOINFO);

  return (
    <>
      <div>
        <span
          onClick={(e) => {
            setTab(TABS.BIOINFO);
          }}
        >
          BIO INFO
        </span>
        <span
          onClick={(e) => {
            setTab(TABS.ACCOUNTINFO);
          }}
        >
          Account INFO
        </span>
      </div>
      {tab == TABS.BIOINFO && <BioInfo />}
      {tab == TABS.ACCOUNTINFO && <AccountInfo />}
      {/* <BioInfo />
      <AccountInfo /> */}
    </>
  );
}
