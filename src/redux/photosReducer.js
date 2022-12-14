const DEFAULT_STATE = {
    photos: [],
  };
  
  const photosReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
      case "ALBUMS/FETCH/START":
        return { ...state, loading: true };
      case "ALBUMS/FETCH/SUCCESS":
        return { ...state, loading: false, error: null, photos: payload };
      case "ALBUMS/FETCH/ERROR":
        return { ...state, loading: false, error: payload };
      case "SET_ALBUMS":
        return {
          ...state,
          photos: payload,
        };
      default:
        return state;
    }
  };
  
  export { photosReducer };