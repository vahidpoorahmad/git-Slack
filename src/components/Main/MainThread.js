import "./MainThread.css";

function MainThread() {
  return (
    <div className="main-threades">
      <div className="main-threades__header">
        <h4 className="main-threades__header--title">Threads</h4>
      </div>
      <div className="main-threades__body">
        <div className="main-threades__body__title">Tend to your threads</div>
        <div className="main-threades__body__body">
          Threads you’re involved in will be collected right here.
        </div>
        <div className="main-threades__body__footer">
          <a href="# " className="main-threades__body__footer--text">
            Learn about threads
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainThread;
