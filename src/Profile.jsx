import React, { useEffect } from "react";
import store from "store";
import { Link } from "react-router-dom";

// import Context from "./Context/Context";
import data from "./data.json";
import "./Profile.css";

const storeKey = "Player-key";

const Profile = ({ pname }) => {
  // const { setPname } = useContext(Context);
  //Storing early data to localstorage
  useEffect(() => {
    store.set(storeKey, { data: pname });
  }, [pname]);

  let details = [];

  details = data.filter((player) => {
    return player.Name === pname;
  });

  const getWidth = (width) => {
    let newWidth = width / 1.5 + "%";
    return newWidth;
  };

  return (
    <div className="profile">
      <div className="player_title">{pname}</div>
      <div className="navigate">
        <Link to="/" style={{ textDecoration: "none", color: "GrayText" }}>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" />
          </svg>
          ⠀ Home
        </Link>
      </div>
      <div className="main-wrapper">
        {/* Left Diagram Section*/}
        <div className="left-wrapper">
          Crossing{" "}
          <div
            className="diagram"
            style={{ width: getWidth(details[0].Crossing) }}
          >
            {details[0].Crossing + "%"}
          </div>
          Finishing
          <div
            className="diagram"
            style={{ width: getWidth(details[0].Finishing) }}
          >
            {details[0].Finishing + "%"}
          </div>
          HeadingAccuracy
          <div
            className="diagram"
            style={{ width: getWidth(details[0].HeadingAccuracy) }}
          >
            {details[0].HeadingAccuracy + "%"}
          </div>
          ShortPassing
          <div
            className="diagram"
            style={{ width: getWidth(details[0].ShortPassing) }}
          >
            {details[0].ShortPassing + "%"}
          </div>
          Volleys
          <div
            className="diagram"
            style={{ width: getWidth(details[0].Volleys) }}
          >
            {details[0].Volleys + "%"}
          </div>
        </div>
        {/* Right Diagram Section */}
        <div className="right-wrapper">
          <div className="tags">
            <span className="tag">{details[0].Club}</span>
            <span className="tag">
              Overall⠀ <b>{details[0].Overall}</b>
            </span>
          </div>
          Age <b> {details[0].Age} </b>
          <br />
          Nationality <b> {details[0].Nationality} </b> <br />
          Value <b> {details[0].Value} </b> <br />
          Wage <b> {details[0].Wage}</b> <br />
          Preferred Foot <b> {details[0]["Preferred Foot"]} </b> <br />
          Work Rate <b> {details[0]["Work Rate"]} </b> <br />
          Position <b> {details[0].Position} </b> <br />
          Jersey Number <b> {details[0]["Jersey Number"]} </b> <br />
          Joined <b> {details[0].Joined} </b> <br />
          Contract Valid Until <b>
            {" "}
            {details[0]["Contract Valid Until"]}{" "}
          </b>{" "}
          <br />
          Height <b> {details[0].Height} </b> <br />
          Weight <b> {details[0].Weight} </b> <br />
        </div>
      </div>
    </div>
  );
};

export default Profile;
