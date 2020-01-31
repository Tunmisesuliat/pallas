import React from "react";
import "./menu-item.style.scss";
import {withRouter} from 'react-router-dom';

const Menu = ({ title, image, size, history, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => {history.push(`${match.url}${title}`)}}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <span className="subtitle"> SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(Menu);
