import React from "react";
import "./Button.css";

function Button({ img, text, setState }) {
  const styles = {
    justifyContent: "center",
  };

  if (img) {
    styles.justifyContent = "baseline";
  }

  const handleClick = ({ target }) => {
    const button =
      target.tagName.toLowerCase() === "img" ? target.parentElement : target;
    setState(button.value);
  };

  return (
    <button
      className="btn-component"
      onClick={handleClick}
      value={text}
      style={styles}
    >
      {img ? <img src={img} alt="flag" /> : ""}
      {text}
    </button>
  );
}

export default Button;
