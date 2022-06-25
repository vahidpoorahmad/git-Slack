import { INSERT_DIRECTMESAGES } from "./DirectMessagesActionType";

export const insertDirectMessages = (email) => {
  return {
    type: INSERT_DIRECTMESAGES,
    email,
  };
};
