import React from "react";
import PlaceholderItem from "../../PlaceholderItem/PlaceholderItem";
import "./News.css";

export default function News({ isCharging, side, news }) {
  const { thumbnail, caption, url } = isCharging
    ? {
        thumbnail: "",
        caption: "",
        url: "",
      }
    : news;

  const firstDot = url.indexOf(".");
  const lastDot = url.indexOf(".", url.indexOf(".") + 1);
  const name = url.slice(firstDot + 1, lastDot);
  const capitalizedName = isCharging
    ? ""
    : name[0].toUpperCase() + name.slice(1);

  if (window.innerWidth > 540) {
    return (
      <div className={`news-card news-card-${side}`}>
        <div className="notch"></div>
        <div className="thumbnail-container">
          {isCharging ? (
            <PlaceholderItem height="130px"></PlaceholderItem>
          ) : (
            <img src={thumbnail} alt="" />
          )}
        </div>
        <div className="info-caption">
          {isCharging ? (
            <div className="skeleton-bars">
              <PlaceholderItem height="15px" mb="5px"></PlaceholderItem>
              <PlaceholderItem
                height="15px"
                mb="5px"
                mt="5px"
              ></PlaceholderItem>
              <PlaceholderItem
                height="15px"
                mb="5px"
                mt="5px"
              ></PlaceholderItem>
            </div>
          ) : (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {caption}
            </a>
          )}
        </div>
      </div>
    );
  } else if (window.innerWidth <= 540) {
    return (
      <div className="news-card-sm">
        <div
          className="background-thumbnail-sm"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <div className={`info-caption-sm info-caption-sm-${side}`}>
          <h4 className="title-sm">{capitalizedName}</h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {caption}
          </a>
        </div>
      </div>
    );
  }
}
