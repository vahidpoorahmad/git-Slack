import { INSERT_CHANNELS } from "./channelActionType";

const initalState = [
  {
    id: 0,
    name: "8",
    slug: "8",
    description:
      "This channel is for working on a project. Hold meetings, share docs, and make decisions together with your team.",
  },

  {
    id: 1,
    name: "general",
    slug: "general",
    description:
      "This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations",
  },

  {
    id: 2,
    name: "random",
    slug: "random",
    description:
      "This channel is for... well, everything else. It’s a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild!",
  },
  {
    id: 3,
    name: "vahid",
    slug: "vahid",
    description: "You created this channel on April 26th.reza is rgrggrgrgr",
  },
];
const channelReducer = (state = initalState, action) => {
  switch (action.type) {
    case INSERT_CHANNELS:
      return [
        ...state,
        {
          id: state.length++,
          name: action.name,
          description: action.description,
        },
      ];

    default:
      return state;
  }
};
export default channelReducer;
