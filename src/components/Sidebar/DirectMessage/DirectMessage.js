import React, { useState } from "react";

import Backdrop from "../Backdrop/Backdrop";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { insertDirectMessages } from "../../../ReduxStore/ReduxDirectMessages/DirectMessagesActionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
function DirectMessage(props) {
  const [madalOpenState, setModalOpenState] = useState(false);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  const [inputEmail, setInputEmail] = useState("");

  const openModalChannelHandler = () => {
    setModalOpenState(true);
  };
  const closeModalChannelHandler = () => {
    setModalOpenState(false);
  };
  function toggelDirectMessagesHandler() {
    setShowDirectMessages(!showDirectMessages);
  }
  const inputNameHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const createItemHandler = (e) => {
    props.CreateItemDirectMessages(inputEmail);
    setInputEmail("");
  };

  return (
    <>
      <div className="channel">
        <div
          className="channels__title"
          onClick={() => toggelDirectMessagesHandler()}
        >
          <div>
            <button
              type="button"
              className="channels__icon--left"
              style={{
                transform: showDirectMessages
                  ? "rotate(0deg)"
                  : "rotate(-90deg)",
              }}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>

          <span className="channel__title--text">Direact message</span>
        </div>
        <div className="channels__icon">
          <button className="channels__icon--right">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="add-chaanal">
        {showDirectMessages ? (
          <>
            <ul>
              {props.todos.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      style={({ isActive }) => {
                        return { background: isActive ? "#1164A3" : "#3f0e40" };
                      }}
                      className="add-account__user"
                      to={`client/${item.id >= 3 ? item.id : item.slug}`}
                    >
                      <button type="button" className="add-account__btn">
                        {item.email.substring(
                          0,
                          1,
                          item.email.lastIndexOf("@")
                        )}
                      </button>
                      <span className="add-account__btn--text">
                        {item.email.substring(0, item.email.lastIndexOf("@"))}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div
              className="add-chaanal__user"
              onClick={openModalChannelHandler}
            >
              <button type="button" className="add-chaanal__btn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <span className="add-chaanal__btn--text">Add teammates</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      {madalOpenState ? (
        <div>
          <Backdrop
            show={madalOpenState}
            closeHandler={closeModalChannelHandler}
          />
          <div className="modal-channels">
            <div className="modal-channel__header">
              <div className="modal-channel__header--title">
                <h3 className="modal-channel__header--title-text">
                  Invite people to vahid
                </h3>
              </div>
              <div className="modal-channel__header--close">
                <button
                  className="modal-channel__header--close-icon"
                  onClick={closeModalChannelHandler}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
            <div className="modal-channel__body">
              <div className="form-channel">
                <label htmlFor="User Name" className="form-channel__label">
                  To:
                </label>
                <input
                  className="form-channel__input"
                  type="email"
                  placeholder="name@gmail.com"
                  value={inputEmail}
                  onChange={inputNameHandler}
                  multiple
                />
              </div>
            </div>
            <div className="modal-channel__footer">
              <button
                className="form-channel__submit"
                onClick={createItemHandler}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.DirectMessageReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CreateItemDirectMessages: (email) => dispatch(insertDirectMessages(email)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DirectMessage);
