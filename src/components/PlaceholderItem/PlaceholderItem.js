import React from "react";
import "./PlaceholderItem.css";

export default function PlaceholderItem(props) {
  const { height, mt, mb } = props;

  const styles = {
    height: height,
    marginTop: mt,
    marginBottom: mb,
  };
  return <div className="placeholder-item" style={styles}></div>;
}
