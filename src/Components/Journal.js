import React from "react";
import locationIcon from "../Fill 219.svg";

const Journal = function (props) {
  return (
    <>
      <div className="journal">
        <div className="journal-img">
          <img className="location" src={props.listImg} alt="places"></img>
        </div>
        <div className="journal-content">
          <div className="flex-container flex1">
            <div className="flex-container flex2">
              <p>
                <img
                  className="location-icon"
                  src={locationIcon}
                  alt="icon"
                ></img>
              </p>
              <p className="country">{props.country}</p>
            </div>
            <div>
              <a className="google-link" href={props.linkToGoogle}>
                View on Google map
              </a>
            </div>
          </div>
          <h1>{props.location}</h1>
          <p className="date">{props.date}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <div className="border"></div>
    </>
  );
};

export default Journal;
