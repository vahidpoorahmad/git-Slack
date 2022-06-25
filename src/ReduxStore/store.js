import { createStore } from "redux";
import channelReducer from "./ReduxChannel/channelReducer";
import directMessageReducer from "./ReduxDirectMessages/directMessageReducer";

import { combineReducers } from "redux";
const reducer = combineReducers({
  ChannelReducer: channelReducer,
  DirectMessageReducer: directMessageReducer,
});

export const store = createStore(reducer);
