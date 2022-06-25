import { INSERT_DIRECTMESAGES } from "./DirectMessagesActionType";

const initalState = [
  {
    id: 0,
    email: "SlackBot@.com",
    slug: "SlackBot",
  },
  {
    id: 1,
    email: "vahidpoorahmad@gmail.com",
    slug: "vahidpoorahmad",
  },
  {
    id: 2,
    email: "akabri.cs@gmail.com",
    slug: "akabri.cs",
  },
];

const directMessageReducer = (state = initalState, action) => {
  switch (action.type) {
    case INSERT_DIRECTMESAGES:
      return [
        ...state,
        {
          id: state.length++,
          email: action.email,
        },
      ];

    default:
      return state;
  }
};
export default directMessageReducer;
