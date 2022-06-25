import "./MainGeneral.css";
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faB,
  faItalic,
  faStrikethrough,
  faLink,
  faListOl,
  faListUl,
  faList,
  faPlus,
  faMicrophone,
  faAt,
  faFaceSmile,
  faVideo,
  faArrowDownAZ,
  faCode,
  faFileCode,
  faMattressPillow,
} from "@fortawesome/free-solid-svg-icons";

function MainGeneral(props) {
  const [title, setTitle] = useState("");
  function submitForm(event) {
    event.preventDefault();
    props.onAdd({ title });
    setTitle("");
  }

  function addCounterNumber() {
    props.addNameGeneral(1);
  }
  const Params = useParams();
  const filterItems = props.domin.filter((item) => {
    if (item.slug) {
      return item.slug === Params.item;
    } else {
      return item.id === parseInt(Params.item);
    }
  });
  console.log(filterItems);

  return (
    <ul>
      <li className="main-general">
        <div className="main-general__header">
          <div className="main-general__header--top">
            <div className="main-general__header--top-left">
              <div
                className="main-general__header--showicon"
                onClick={props.showSidebar}
              >
                <FontAwesomeIcon icon={faMattressPillow} />
              </div>
              <button className="main-general__header--title">
                <span className="main-general__header--title-text">
                  {filterItems[0].name}
                </span>
                <div className="main-general__header--title-icon">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </button>
            </div>
            <div className="main-general__header--top-right">
              <button className="main-general__header--members">
                <span className="main-general__header--members-icon">A</span>
                <span className="main-general__header--members-icon">v</span>
                <span className="main-general__header--members-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="main-general__header--members-icon">4</span>
              </button>
            </div>
          </div>
          <div className="main-general__header--bottom">
            <div className="book-mark">
              <button className="book-mark__btn">+</button>
              <span className="book-mark__title">Add a bookmark</span>
            </div>
          </div>
        </div>
        <div className="main-general__body">
          <div className="main-general__body--Description">
            <div className="main-general__body--Description--icon">
              <button
                className="main-general__body--Description--icon-btn"
                onClick={addCounterNumber}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
            <div className="main-general__body--Description--text">
              <h5 className="Description__text-title">
                You’re looking at the
                <span className="textcolor-blue">
                  #{filterItems[0].name}
                </span>{" "}
                channel
              </h5>
              <p className="Description__text-subtitle">
                {filterItems[0].description}
                <span className="textcolor-blue">Edit description</span>
              </p>
            </div>
          </div>
          <div className="main-general__body--date">
            <button className="main-general__body--date-massege">
              November 3rd, 2021
              <span className="main-general__body--date-icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </button>
          </div>
          <div className="main-general__body--masseges">
            <div className="main-general__body--massege">
              <div className="main-general__body--masseges--icon">
                <button className="main-general__body--masseges--icon-btn">
                  V
                </button>
              </div>
              <div className="main-general__body--masseges--text">
                <h5 className="masseges__text-title">vahid poorahmad</h5>
                <p className="masseges__text-subtitle">سلام</p>
              </div>
            </div>
            <div className="main-general__body--massege">
              <div className="main-general__body--masseges--icon">
                <button className="main-general__body--masseges--icon-btn">
                  A
                </button>
              </div>
              <div className="main-general__body--masseges--text">
                <h5 className="masseges__text-title">Alireza Akbari</h5>
                <p className="masseges__text-subtitle">
                  joined #general along with
                </p>
              </div>
            </div>
            <div className="main-general__body--massege">
              <div className="main-general__body--masseges--icon">
                <button className="main-general__body--masseges--icon-btn">
                  A
                </button>
              </div>
              <div className="main-general__body--masseges--text">
                <h5 className="masseges__text-title">Alireza Akbari</h5>
                <p className="masseges__text-subtitle">salam</p>
              </div>
            </div>
            <ul className="">
              <li className="main-general__body--massege">
                <div className="main-general__body--masseges--icon">
                  <button className="main-general__body--masseges--icon-btn">
                    V
                  </button>
                </div>
                <div className="main-general__body--masseges--text">
                  <h5 className="masseges__text-title">vahid poorahmad</h5>
                  <p className="masseges__text-subtitle"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-general__footer">
          <div className="form-message">
            <div className="form-message__icons">
              <div className="form-message__icon-top">
                <div className="line--icon">
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faB} />
                  </button>
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faItalic} />
                  </button>
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faStrikethrough} />
                  </button>
                </div>
                <div className="line--icon">
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faLink} />
                  </button>
                </div>
                <div className="line--icon">
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faListOl} />
                  </button>
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faListUl} />
                  </button>
                </div>
                <div className="line--icon">
                  <button type="button" className="message--icon">
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div>

                <button type="button" className="message--icon">
                  <FontAwesomeIcon icon={faCode} />
                </button>
                <button type="button" className="message--icon">
                  <FontAwesomeIcon icon={faFileCode} />
                </button>
              </div>
            </div>
            <form onSubmit={submitForm}>
              <input
                value={title}
                type="text"
                className="form-message__text"
                placeholder="Send a message to # general"
                onChange={(e) => setTitle(e.target.value)}
              />
            </form>
            <div className="form-message__icon-bottom">
              <div className="line--icon">
                <button type="button" className="message--icon">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="line--icon">
                <button type="button" className="message--icon">
                  <FontAwesomeIcon icon={faVideo} />
                </button>
                <button type="button" className="message--icon">
                  <FontAwesomeIcon icon={faMicrophone} />
                </button>
              </div>
              <button type="button" className="message--icon">
                <FontAwesomeIcon icon={faFaceSmile} />
              </button>
              <button type="button" className="message--icon">
                <FontAwesomeIcon icon={faAt} />
              </button>
              <button type="button" className="message--icon">
                <FontAwesomeIcon icon={faArrowDownAZ} />
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
const mapStateToProps = (state) => {
  return {
    domin: state.ChannelReducer,
  };
};
export default connect(mapStateToProps)(MainGeneral);
