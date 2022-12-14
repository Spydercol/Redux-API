const DEFAULT_STATE = {
  albums: [],
};

const albumReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "ALBUMS/FETCH/START":
      return { ...state, loading: true };
    case "ALBUMS/FETCH/SUCCESS":
      return { ...state, loading: false, error: null, albums: payload };
    case "ALBUMS/FETCH/ERROR":
      return { ...state, loading: false, error: payload };
    case "SET_ALBUMS":
      return {
        ...state,
        albums: payload,
      };
    default:
      return state;
  }
};

export { albumReducer };
