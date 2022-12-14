export const getAlbums = () => {
  return fetch(`https://jsonplaceholder.typicode.com/albums`).then((r) =>
    r.json()
  );
};

export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((r) =>
    r.json()
  );
};

export const getPhotos = () => {
  return fetch(`https://jsonplaceholder.typicode.com/photos`).then((r) =>
    r.json()
  );
};
