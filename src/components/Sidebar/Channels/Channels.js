import React, { useState } from "react";
import "./Channels.css";
import Backdrop from "../Backdrop/Backdrop";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { insertChannel } from "../../../ReduxStore/ReduxChannel/channelActionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Channels(props) {
  const [madalOpenState, setModalOpenState] = useState(false);
  const [showChannel, setShowChannelList] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const openModalChannelHandler = () => {
    setModalOpenState(true);
  };
  const closeModalChannelHandler = () => {
    setModalOpenState(false);
  };
  function showHideHandlerChannel() {
    setShowChannelList(!showChannel);
  }
  const inputNameHandler = (e) => {
    setInputName(e.target.value);
  };
  const inputDescriptionHandler = (e) => {
    setInputDescription(e.target.value);
  };
  const createItemHandler = (e) => {
    props.CreateItemChannel(inputName, inputDescription);
    setInputName("");
    setInputDescription("");
  };

  return (
    <>
      <div className="channel">
        <div
          className="channels__title"
          onClick={() => showHideHandlerChannel()}
        >
          <div>
            <button
              className="channels__icon--left"
              style={{
                transform: showChannel ? "rotate(0deg)" : "rotate(-90deg)",
              }}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
          <span className="channel__title--text">Channels</span>
        </div>
        <div className="channels__icon">
          <button className="channels__icon--right">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="add-chaanal">
        {showChannel ? (
          <>
            <ul>
              {props.todos.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      style={({ isActive }) => {
                        return { background: isActive ? "#1164A3" : "#3f0e40" };
                      }}
                      className="add-chaanal__user"
                      to={`/${item.id >= 4 ? item.id : item.slug}`}
                    >
                      <button type="button" className="add-chaanal__btn">
                        #
                      </button>
                      <span className="add-chaanal__btn--text">
                        {item.name}
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
              <span className="add-chaanal__btn--text">Add chaanals</span>
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
                  Create a channel
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
                  Name
                </label>
                <input
                  className="form-channel__input"
                  type="text"
                  placeholder="e.g. plan-budget"
                  value={inputName}
                  onChange={inputNameHandler}
                />
                <label htmlFor="User Name" className="form-channel__label">
                  Description(optional)
                </label>
                <input
                  className="form-channel__input"
                  type="text"
                  placeholder="Description"
                  value={inputDescription}
                  onChange={inputDescriptionHandler}
                />
              </div>
            </div>
            <div className="modal-channel__footer">
              <button
                className="form-channel__submit"
                onClick={createItemHandler}
              >
                Create
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
    todos: state.ChannelReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CreateItemChannel: (name, description) =>
      dispatch(insertChannel(name, description)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Channels);
