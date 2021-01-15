import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class NavBar extends Component {
  state = {
    clicked: false,
    body: document.querySelector("body"),
  };

  handleClick = () => {
    if (window.innerWidth <= 960) {
      this.setState({
        clicked: !this.state.clicked,
      });
      this.state.body.classList.toggle("disabledScroll");
    }
  };

  render() {
    return (
      <div className="Navbar">
        <h4
          className="navbar-logo"
          onClick={this.state.clicked ? this.handleClick : undefined}
        >
          <Link to="/">Home</Link>
        </h4>
        <div className="menu-icon" onClick={this.handleClick}>
          <div
            className={`line line-1 ${this.state.clicked ? "active" : ""}`}
          ></div>
          <div
            className={`line line-2 ${this.state.clicked ? "active" : ""}`}
          ></div>
          <div
            className={`line line-3 ${this.state.clicked ? "active" : ""}`}
          ></div>
        </div>
        <ul className={`nav-menu ${this.state.clicked ? "active" : ""}`}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={this.handleClick}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBar;
