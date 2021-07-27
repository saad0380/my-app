export default function UpdateAction(state, payload) {
    console.log("state:", state);
    console.log("payload:", payload);
    return {
      ...state,
      ...payload
    };
  }