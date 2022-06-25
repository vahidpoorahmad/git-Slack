import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faMagnifyingGlass,
  faClock,
  faHashtag,
  faCommentDots,
  faLink,
  faXmark,
  faComments,
  faFileLines,
  faLayerGroup,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
const menuHistory = [
  { id: 1, name: "general", icon: faHashtag },
  { id: 2, name: "Threads", icon: faCommentDots },
  { id: 3, name: "random", icon: faHashtag },
  { id: 4, name: "Help", icon: faCircleQuestion },
  { id: 5, name: "Alireza Akbari", icon: faClock },
  { id: 6, name: "vahid poorahmad", icon: faClock },
  { id: 7, name: "Slackbot ", icon: faClock },
  { id: 8, name: "8 ", icon: faHashtag },
  { id: 9, name: "Slack Connect ", icon: faLink },
];
function Header({ selectHelp }) {
  return (
    <div className="navbar">
      <div className="user-history">
        <div className="user-history__icon">
          <button type="submit" title="History" className="user-history__btn">
            <FontAwesomeIcon icon={faClock} />
          </button>
          <div className="nav-history">
            <ul className="nav-history__menu">
              {menuHistory.map((item) => {
                return (
                  <li key={item.id} className="nav-history__item">
                    <div className="nav-history__icon">
                      <button className="nav-history__icon--btn">
                        <FontAwesomeIcon icon={item.icon} />
                      </button>
                    </div>
                    <span className="nav-history__name">{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="slack-search">
        <form className="form-search">
          <input
            className="form-search__input"
            title="Search vahid "
            type="search"
            placeholder=" Search vahid"
          />
          <button type="submit" className="form-search__btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="box-search">
          <div className="box-search__header">
            <form className="box-search__header--form">
              <button className="box-search__header--icon-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                className="box-search__header--search"
                type="search"
                placeholder="Search for whatever;let's find it together"
              />
              <button className="box-search__header--icon-close">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </form>
          </div>
          <div className="box-search__body">
            <div className="box-search__body--find">
              <div className="box-search__body--find-title">
                <button className="box-search__body--find-title--icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
              <h4 className="box-search__body--find-title--text">
                Find in #general
              </h4>
            </div>
            <div className="box-search__body--looking">
              <div className="box-search__body--looking-Description">
                <span className="box-search__body--looking-Description--text">
                  I'm looking for...
                </span>
              </div>
              <div className="navbar-search">
                <ul className="navbar-search__menu">
                  <li className="navbar-search__menu--item">
                    <button className="navbar-search__menu--icon">
                      <FontAwesomeIcon icon={faComments} />
                    </button>
                    <a href="# " className="navbar-search__menu--text">
                      Messages
                    </a>
                  </li>
                  <li className="navbar-search__menu--item">
                    <button className="navbar-search__menu--icon">
                      <FontAwesomeIcon icon={faLayerGroup} />
                    </button>
                    <a href="# " className="navbar-search__menu--text">
                      File
                    </a>
                  </li>
                  <li className="navbar-search__menu--item">
                    <button className="navbar-search__menu--icon">
                      <FontAwesomeIcon icon={faFileLines} />
                    </button>
                    <a href="# " className="navbar-search__menu--text">
                      Channels
                    </a>
                  </li>
                  <li className="navbar-search__menu--item">
                    <button className="navbar-search__menu--icon">
                      <FontAwesomeIcon icon={faUserGroup} />
                    </button>
                    <a href="# " className="navbar-search__menu--text">
                      People
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-search__body--searches">
              <div className="box-search__body--looking-Description">
                <span className="box-search__body--looking-Description--text">
                  Recent searches
                </span>
              </div>
            </div>
          </div>
          <div className="box-search__footer">
            <p className="box-search__footer--title">
              Not the results you expected?
              <button className="box-search__footer--title-btn">
                Give feedback
              </button>
              or
              <button className="box-search__footer--title-btn">
                learn more
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="user-help">
        <div className="user-help__mark">
          <button
            type="button"
            className="user-help__mark--btn"
            onClick={selectHelp}
          >
            <FontAwesomeIcon icon={faCircleQuestion} />
          </button>
        </div>
        <div className="user-help__fname">
          <button type="submit" className="user-help__fname--btn">
            v
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
