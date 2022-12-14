import { getAlbums, getUsers, getPhotos } from "../api";

export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: "ALBUMS/FETCH/START" });
  try {
    const albums = await getAlbums();
    dispatch({ type: "ALBUMS/FETCH/SUCCESS", payload: albums });
  } catch (e) {
    dispatch({ type: "ALBUMS/FETCH/ERROR", payload: e.message });
    console.error(e);
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "ALBUMS/FETCH/START" });
  try {
    const users = await getUsers();
    dispatch({ type: "ALBUMS/FETCH/SUCCESS", payload: users });
  } catch (e) {
    dispatch({ type: "ALBUMS/FETCH/ERROR", payload: e.message });
    console.error(e);
  }
};

export const fetchPhotos = () => async (dispatch) => {
  dispatch({ type: "ALBUMS/FETCH/START" });
  try {
    const photos = await getPhotos();
    dispatch({ type: "ALBUMS/FETCH/SUCCESS", payload: photos });
  } catch (e) {
    dispatch({ type: "ALBUMS/FETCH/ERROR", payload: e.message });
    console.error(e);
  }
};