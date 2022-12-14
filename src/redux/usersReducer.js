const DEFAULT_STATE = {
  users: [],
};

const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "ALBUMS/FETCH/START":
      return { ...state, loading: true };
    case "ALBUMS/FETCH/SUCCESS":
      return { ...state, loading: false, error: null, users: payload };
    case "ALBUMS/FETCH/ERROR":
      return { ...state, loading: false, error: payload };
    case "SET_ALBUMS":
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export { userReducer };
