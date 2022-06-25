import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faAngleDown,
  faPenToSquare,
  faLink,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import Channels from "./Channels/Channels";
import DirectMessage from "./DirectMessage/DirectMessage";
function Sidebar() {
  const [showList, setShowList] = useState(true);
  const [showChannel, setShowChannelList] = useState(true);
  function showHideHandler() {
    setShowList(!showList);
  }
  function showHideHandlerChannel() {
    setShowChannelList(!showChannel);
  }
  return (
    <>
      <div className="user">
        <div className="user__workspace">
          <button type="submit" className="user__workspace--name">
            <span className="user--text"> vahid</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
        <div className="user__workspace">
          <button title="new message" className="user__workspace--icon">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </div>

      <div className="scroll">
        <div className="connections">
          <Link className="Threads" to="/threads" key="1">
            <button type="button" className="Threads__slack">
              <FontAwesomeIcon icon={faCommentDots} />
            </button>
            <span className="Threads__slack--text">Threads</span>
          </Link>
          <Link className="slack-connect" to="/MainSlack" key="2">
            <button type="button" className="slack-connect__user">
              <FontAwesomeIcon icon={faLink} />
            </button>
            <span className="slack-connect__user--text" to="/">
              Slack Connect
            </span>
          </Link>
          <div className="more">
            <button type="button" className="more__user">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            <span className="more__user--text">More</span>
          </div>
        </div>
        <Channels />
        <DirectMessage />

        {/* <div className="user-message" onClick={() => showHideHandler()}>
          <button
            type="button"
            className="user-message__btn"
            style={{
              transform: showList ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <span className="user-message--text">Direact message</span>
        </div>

        {showList ? (
          <div className="add-channe">
            <div className="add-account__user">
              <div>
                <button type="button" className="add-account__btn">
                  S
                </button>
              </div>
              <span className="add-account__btn--text">Slackbot</span>
            </div>
            <div className="add-account__user">
              <div>
                <button type="button" className="add-account__btn">
                  v
                </button>
              </div>
              <span className="add-account__btn--text">
                vahid poorahmad you
              </span>
            </div>
            <div className="add-account__user">
              <div>
                <button type="button" className="add-account__btn">
                  A
                </button>
              </div>
              <span className="add-account__btn--text">Alireza Akbari</span>
            </div>
            <div className="add-account__user">
              <div>
                <button type="button" className="add-account__btn">
                  +
                </button>
              </div>
              <span className="add-account__btn--text">Add teammares</span>
            </div>
          </div>
        ) : null} */}
      </div>
    </>
  );
}

export default Sidebar;
