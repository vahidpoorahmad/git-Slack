import { INSERT_CHANNELS } from "./channelActionType";

export const insertChannel = (name, description) => {
  return {
    type: INSERT_CHANNELS,
    name,
    description,
  };
};
