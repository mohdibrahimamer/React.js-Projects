import React, { useState, useEffect } from "react";
import data from "./data 6/Data"
import { FaAngleDoubleRight } from "react-icons/fa";

const TabsHome = () => {
  // yaha per data yeh project galat lera tha isliye data k folder ka naam change karey
  const [infos, setInfos] = useState(data);

  const [value, SetValue] = useState(0);

  const { id, title, dates, duties, company } = infos[value];

  {
    /* yaha per api work nai kari phir bhi data fetch functionality likhre
    
    const [tabs, setTabs] = useState([]);
    
    // yaha per gettabs ki functionality likhre
    
    const GetTabs = async () => {
      const response = await fetch(url);
      const tabs = await response.json();
      setTabs(tabs);
      console.log(tabs);
      };
      
      useEffect(() => {
        GetTabs();
        }, []);
        */
  }

  return (
    <>
      <div>TabsHome</div>
      <h1> experience</h1>
      <div className="info">
        <div className="btn-container">
          tab home ko check karo
          {infos.map((info, index) => {
            const { id, title, duties, dates, company } = info;
            return (
              <button type="button" key={index} onClick={() => SetValue(index)}>
                {company}
                <br />
              </button>
            );
          })}
        </div>
        <h1>id={id}</h1>
        <h1>title = {title}</h1>
        <h1>dates = {dates}</h1>
        {/* yaha per "usestate" ki value "zero" rahene ki vajah se map use karey duties k under */}

        {duties.map((duty, index) => {
          return (
            <div key={index} className="duty">
              <FaAngleDoubleRight className="icon" />
              <p>{duty}</p>
            </div>
          );
        })}


        <h1>company = {company}</h1>
      </div>
    </>
  );
};

export default TabsHome;
