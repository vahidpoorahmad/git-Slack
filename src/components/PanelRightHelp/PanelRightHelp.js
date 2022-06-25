import "./PanelRightHelp.css";

import imageHelp from "../../images/368-3689768_01-growth-development-cartoon-clipart.png";
import imageOne from "../../images/photo-1549465220-1a8b9238cd48.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faGift,
  faKeyboard,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
function PanelRightHelp() {
  return (
    <div
      style={{
        borderLeft: "1px solid black",
      }}
    >
      <div className="help__header">
        <div className="help__header--title">
          <div className="help__header--title-text">Help</div>
          <div className="help__header--title-icon">
            <div>
              <button className="help__header--title-icon--btn">
                <FontAwesomeIcon icon={faKeyboard} />
              </button>
            </div>
            <div>
              <button className="help__header--title-icon--btn">
                <FontAwesomeIcon icon={faGift} />
              </button>
            </div>
            <div>
              <button className="help__header--title-icon--btn">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </div>
        <div className="help__header-answer">
          <span className="help__header-answer--text">Find answer quickly</span>
        </div>
        <div className="help__header-search">
          <form className="help__header-search--form">
            <button className="help__header-search--icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="How can we healp?"
              className="help__header-search--input"
            />
          </form>
        </div>
      </div>
      <div className="help__body">
        <div className="help__body--discover">
          <div className="help__body--discover--title">
            <div className="help__body--discover--title--icon">
              <button className="help__body--discover--title-icon--btn">
                <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
            <span className="help__body--discover--title-text">
              Discover more
            </span>
          </div>
          <div>1/1</div>
        </div>
        <div className="header__body--cardT">
          <div className="header__body--cardT-header">
            <div className="header__body--cardT-header_title">
              What's new in Slack
            </div>
            <div className="header__body--card-header_subTitle">
              Discover new features available now
            </div>
          </div>
          <div className="header__body--cardT-image">
            <img src={imageOne} alt="error" className="image--top" />
          </div>
        </div>
        <div className="header__body--cardB">
          <div className="header__body--cardB-image">
            <img src={imageHelp} alt="error" className="image--bottom" />
          </div>
          <div className="header__body--cardB-text">
            <span>Send and read message</span>
          </div>
        </div>
        <div className="header__body--cardB">
          <div className="header__body--cardB-image">
            <img src={imageHelp} alt="error" className="image--bottom" />
          </div>
          <div className="header__body--cardB-text">
            <span>Understand direct messages</span>
          </div>
        </div>
        <div className="header__body--cardB">
          <div className="header__body--cardB-image">
            <img src={imageHelp} alt="error" className="image--bottom" />
          </div>
          <div className="header__body--cardB-text">
            <span>Add files to Slack</span>
          </div>
        </div>
        <div className="header__body--cardB">
          <div className="header__body--cardB-image">
            <img src={imageHelp} alt="error" className="image--bottom" />
          </div>
          <div className="header__body--cardB-text">
            <span>Use mentions in Slack</span>
          </div>
        </div>
        <div className="header__body--cardB">
          <div className="header__body--cardB-image">
            <img src={imageHelp} alt="error" className="image--bottom" />
          </div>
          <div className="header__body--cardB-text">
            <span>Download Slack for mobile</span>
          </div>
        </div>
      </div>
      <div className="help__footer">
        <div className="help__footer--left">aaa</div>
        <div className="help__footer--right">sss</div>
      </div>
    </div>
  );
}
export default PanelRightHelp;
