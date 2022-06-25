import React from "react";
import imag1 from "../../images/368-3689768_01-growth-development-cartoon-clipart.png";
import "./MainSlack.css";
function MainSlack() {
  return (
    <div className="main-slack">
      <div className="main-slack__header">
        <div className="main-slack__header--left">
          <h4>Slack Content</h4>
        </div>
        <div className="main-slack__header--right">
          <a href="# " className="main-slack__header--right-text">
            View lnvitations
          </a>
        </div>
      </div>
      <div className="main-slack__body">
        <div className="main-slack__body--top">
          <div className="main-slack__body--top-left">
            <div className="main-slack__body--top-left--title">
              <h3>An easy way to work with anyone outside vahid</h3>
            </div>
            <div className="main-slack__body--top-left--subtitle">
              <p>
                Slack Connect makes working with clients, vendors, and partners
                as pleasant and secure as working with your own team.
              </p>
            </div>
            <a href="# " className="main-slack__body--top-left--button">
              See how Slack Connect works
            </a>
          </div>
          <div className="main-slack__body--top-right">
            <img src={imag1} alt="wwww" className="image-top" />
          </div>
        </div>
        <div className="main-slack__body--bottom">
          <div className="image-bottom">
            <img src={imag1} alt="wwww" className="image-bottom__port" />
          </div>
          <h4 className="main-slack__text">How do you want to work together?</h4>
          <div className="main-slack__card">
            <div className="main-slack__card--left">
              <button className="main-slack__card--left-image">+</button>
              <div className="main-slack__card--left-body">
                <h5>Start a direct message</h5>
                <p>Talk one-on-one with anyone</p>
              </div>
            </div>
            <div className="main-slack__card--right">
              <button className="main-slack__card--left-image">+</button>
              <div className="main-slack__card--left-body">
                <h5>Create a channel</h5>
                <p>Work together with up to 250 companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSlack;
