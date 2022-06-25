import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainThread from "./components/Main/MainThread";
import MainSlack from "./components/Main/MainSlack";
import PanelRightHelp from "./components/PanelRightHelp/PanelRightHelp";
import LayoutDirectMesaages from "./components/Layout/LayoutDirectMesaages";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/store";

function App() {
  const [show, setShow] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [messages, setmessages] = useState([]);
  function selectHelpHandler() {
    setShow(!show);
  }
  function addProduct(title) {
    const id = Math.floor(Math.random() * 1000);
    const newMessage = { id, ...title };
    setmessages([...messages, newMessage]);
  }
  function showSidebarHandler() {
    setShowPanel(true);
  }
  return (
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <Header selectHelp={() => selectHelpHandler()} />
        </header>
        <div className="content">
          <div className={`sidebar__l ${showPanel ? "active-side" : ""}`}>
            <Sidebar />
          </div>

          <main className="main-slacks">
            <Routes>
              <Route path="/threads" element={<MainThread />}></Route>
              <Route path="/MainSlack" element={<MainSlack />}></Route>
              <Route path="/:item" element={<Layout />}></Route>

              <Route
                path="client/:item"
                element={<LayoutDirectMesaages />}
              ></Route>
            </Routes>
          </main>
          <div style={{ width: show ? "300px" : "0px" }} className="sidebar__r">
            {show ? <PanelRightHelp /> : null}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
